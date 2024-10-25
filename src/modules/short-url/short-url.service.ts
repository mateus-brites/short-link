import { Inject, Injectable } from '@nestjs/common';
import { CreateShortUrlDto } from './dto/create-short-url.dto';
import { UpdateShortUrlDto } from './dto/update-short-url.dto';
import { nanoid } from 'nanoid';
import { IShortUrlRepository } from './repositories/short-url.interface.repository';
import { JwtPayloadDto } from '../auth/dto/jwt-payload.dto';

@Injectable()
export class ShortUrlService {
  constructor(
    @Inject('ShortUrlRepository')
    private readonly shortUrlRepository: IShortUrlRepository,
  ) {}
  async create(createShortUrlDto: CreateShortUrlDto, user: JwtPayloadDto) {
    console.log({ user });
    const short = nanoid(6);
    const shortedUrl = this.shortUrlRepository.create(
      createShortUrlDto.url,
      short,
      user.id,
    );
    return shortedUrl;
  }

  findAll() {
    return `This action returns all shortUrl`;
  }

  findOne(id: number) {
    return `This action returns a #${id} shortUrl`;
  }

  update(id: number, updateShortUrlDto: UpdateShortUrlDto) {
    return `This action updates a #${id} shortUrl`;
  }

  remove(id: number) {
    return `This action removes a #${id} shortUrl`;
  }
}
