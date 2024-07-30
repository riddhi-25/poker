import { UserLoginDto } from './auth.dto';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginSuccess } from './auth.model';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  async login(@Body() userLoginDto: UserLoginDto): Promise<LoginSuccess> {
    return await this.authService.login(userLoginDto.username, userLoginDto.password);
  }

  @Get('currentUser')
  async getCurrentUser() {
    return await this.authService.getCurrentUser();
  }
}
