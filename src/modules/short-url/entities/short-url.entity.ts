import { ApiProperty } from '@nestjs/swagger';
import { User } from '@prisma/client';
import { IsUUID } from 'class-validator';

export class ShortUrl {
  @ApiProperty()
  @IsUUID()
  id: string;

  @ApiProperty()
  url: string;

  @ApiProperty()
  shorting: string;

  @ApiProperty()
  user: User;

  @ApiProperty()
  userId: string;

  @ApiProperty()
  clicks: number;

  @ApiProperty()
  created_at: Date;

  @ApiProperty()
  updated_at: Date;

  @ApiProperty({ nullable: true })
  deleted_at: Date;
}
