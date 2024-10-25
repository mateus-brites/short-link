import { PartialType } from '@nestjs/swagger';
import { CreateShortUrlDto } from './create-short-url.dto';
import { ShortUrl } from '../entities/short-url.entity';

export class UpdateShortUrlDto {
  url?: string;
  clicks?: number;
  updated_at?: Date;
}
