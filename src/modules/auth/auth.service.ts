import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { UnauthorizedException } from 'src/errors/main';
import { compare } from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(email);
    if (!user) {
      throw UnauthorizedException();
    }
    const { password } = user;

    const passwordMatch = await compare(pass, password);

    if (!passwordMatch) {
      throw UnauthorizedException();
    }

    const payload = { id: user.id, username: user.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
