import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
  UnauthorizedException,
} from '@nestjs/common';
import axios, { InternalAxiosRequestConfig } from 'axios';
import { Observable } from 'rxjs';
import { axisUtil } from '../main';

@Injectable()
export class AuthInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context.switchToHttp().getRequest();
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];

    if (req.url === '/api/auth') {
      console.log('Login API');
      return next.handle();
    }

    if (!token) {
      throw new UnauthorizedException('No token provided');
    }

    axisUtil.defaults.headers.common['Authorization'] = authHeader;

    return next.handle();
  }
}
