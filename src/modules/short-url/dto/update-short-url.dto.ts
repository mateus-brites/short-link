import { PartialType } from '@nestjs/swagger';
import { CreateShortUrlDto } from './create-short-url.dto';

export class UpdateShortUrlDto extends PartialType(CreateShortUrlDto) {}
