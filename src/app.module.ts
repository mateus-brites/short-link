import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { ShortUrlModule } from './modules/short-url/short-url.module';
import { PrismaService } from './modules/prisma/prisma.service';

@Module({
  imports: [UsersModule, AuthModule, ShortUrlModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
