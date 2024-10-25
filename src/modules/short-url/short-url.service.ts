import { Inject, Injectable } from '@nestjs/common';
import { CreateShortUrlDto } from './dto/create-short-url.dto';
import { UpdateShortUrlDto } from './dto/update-short-url.dto';
import { nanoid } from 'nanoid';
import { IShortUrlRepository } from './repositories/short-url.interface.repository';
import { JwtPayloadDto } from '../auth/dto/jwt-payload.dto';
import { UrlNotFoundException } from 'src/errors/main';

@Injectable()
export class ShortUrlService {
  constructor(
    @Inject('ShortUrlRepository')
    private readonly shortUrlRepository: IShortUrlRepository,
  ) {}
  async create(createShortUrlDto: CreateShortUrlDto, user: JwtPayloadDto) {
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

  async remove(id: string, user: JwtPayloadDto) {
    console.log({ user });
    console.log(id);
    const shortUrl = this.shortUrlRepository.findByIdAndUserId(id, user.id);

    if (!shortUrl) {
      throw UrlNotFoundException();
    }

    await this.shortUrlRepository.delete(id);
    return id;
  }
}
