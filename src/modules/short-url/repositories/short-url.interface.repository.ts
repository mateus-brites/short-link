import { ShortUrl } from '@prisma/client';
import { UpdateShortUrlDto } from '../dto/update-short-url.dto';

export interface IShortUrlRepository {
  create(url: string, short: string, userId: string): Promise<ShortUrl>;
  findByShort(short: string): Promise<ShortUrl>;
  delete(id: string): Promise<void>;
  findById(id: string): Promise<ShortUrl>;
  update(id: string, data: UpdateShortUrlDto): Promise<ShortUrl>;
  findByUserId(userId: string): Promise<ShortUrl[]>;
  findByIdAndUserId(userId: string, id: string): Promise<ShortUrl>;
}
