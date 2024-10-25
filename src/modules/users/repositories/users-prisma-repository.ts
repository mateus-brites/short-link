import { IUsersRepository } from './users-repository.interface';
import { CreateUserDto } from '../dto/create-user.dto';
import { User } from '../entities/user.entity';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/modules/prisma/prisma.service';

@Injectable()
export class PrismaUsersRepository implements IUsersRepository {
  constructor(private readonly prismaService: PrismaService) {}
  async create(data: CreateUserDto): Promise<User> {
    const user = await this.prismaService.user.create({ data });
    return user;
  }

  async delete(userId: string): Promise<void> {
    await this.prismaService.user.delete({ where: { id: userId } });
    return;
  }

  async findByEmail(email: string): Promise<User> {
    return this.prismaService.user.findFirst({ where: { email } });
  }
}
