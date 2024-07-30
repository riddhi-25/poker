import { ForbiddenException, Injectable, UnauthorizedException } from '@nestjs/common';
import { axisUtil } from '../../main';
import { JIRA_BASE_URL } from '../../constants/constants';
import { CurrentUser, LoginSuccess, User } from './auth.model';

@Injectable()
export class AuthService {
  async login(username: string, password: string): Promise<LoginSuccess> {
    try {
      const token = Buffer.from(`${username}:${password}`).toString('base64');
      console.log(token);
      const response = await axisUtil.get<CurrentUser>(`${JIRA_BASE_URL}/rest/auth/1/session`, {
        headers: {
          Authorization: `Basic ${token}`
        }
      });
  
      if (response.status === 200) {
        return {
          token
        };
      }
    } catch (error) {
      if (error.response.status === 401) {
        throw new UnauthorizedException('Invalid Username/Password.');
      } else if (error.response.status === 403) {
        throw new ForbiddenException('Captcha Required.');
      }
    }
  }

  async getCurrentUser(): Promise<User> {
    const response = await this.loginCheck();
    const user = await axisUtil.get<User>(`${response.self}`)
    return user.data;
  }

  private async loginCheck(): Promise<CurrentUser> {
    const response = await axisUtil.get<CurrentUser>(`${JIRA_BASE_URL}/rest/auth/1/session`);
    return response.data;
  }
}
