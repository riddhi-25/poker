import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AuthInterceptor } from '../interceptors/auth.interceptor';
import { AuthModule } from '../modules/auth/auth.module';
import { JiraModule } from '../modules/jira/jira.module';

@Module({
  imports: [AuthModule, JiraModule],
  controllers: [],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: AuthInterceptor
    }
  ],
})
export class AppModule {}
