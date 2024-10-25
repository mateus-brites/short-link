import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { IUsersRepository } from './repositories/users-repository.interface';
import { hash } from 'bcryptjs';
import { userAlreadyExist } from 'src/errors/main';

@Injectable()
export class UsersService {
  constructor(
    @Inject('UsersRepository')
    private readonly usersRepository: IUsersRepository,
  ) {}
  async create(createUserDto: CreateUserDto) {
    const userExist = this.usersRepository.findByEmail(createUserDto.email);

    if (userExist) {
      throw userAlreadyExist();
    }

    const passwordHashed = await hash(createUserDto.password, 8);
    const user: CreateUserDto = {
      email: createUserDto.email,
      password: passwordHashed,
    };
    return this.usersRepository.create(user);
  }

  async findOne(email) {
    return this.usersRepository.findByEmail(email);
  }
}
