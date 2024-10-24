import { CreateUserDto } from '../dto/create-user.dto';
import { User } from '../entities/user.entity';

export interface IUsersRepository {
  create(data: CreateUserDto): Promise<User>;
  delete(userId: string): Promise<void>;
  findByEmail(email: string): Promise<User>;
}
