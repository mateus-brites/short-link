import { Inject, Injectable } from '@nestjs/common';
import { CreateShortUrlDto } from './dto/create-short-url.dto';
import { UpdateShortUrlDto } from './dto/update-short-url.dto';
import { nanoid } from 'nanoid';
import { IShortUrlRepository } from './repositories/short-url.interface.repository';
import { JwtPayloadDto } from '../auth/dto/jwt-payload.dto';
import { UrlNotFoundException } from 'src/errors/main';
import { Response } from 'express';

@Injectable()
export class ShortUrlService {
  constructor(
    @Inject('ShortUrlRepository')
    private readonly shortUrlRepository: IShortUrlRepository,
  ) {}
  async create(createShortUrlDto: CreateShortUrlDto, user: JwtPayloadDto) {
    if (user) {
      const short = nanoid(6);
      const shortedUrl = this.shortUrlRepository.create(
        createShortUrlDto.url,
        short,
        user.id,
      );
      return shortedUrl;
    }

    const short = nanoid(6);
    const shortedUrl = this.shortUrlRepository.create(
      createShortUrlDto.url,
      short,
      null,
    );
    return shortedUrl;
  }

  async findAll(user: JwtPayloadDto) {
    return this.shortUrlRepository.findByUserId(user.id);
  }

  async findOne(url: string, res: Response) {
    const shortUrl = await this.shortUrlRepository.findByShort(url);

    if (!shortUrl) {
      throw UrlNotFoundException();
    }

    await this.shortUrlRepository.update(shortUrl.id, {
      clicks: shortUrl.clicks + 1,
    });
    res.redirect(shortUrl.url);
  }

  async update(
    id: string,
    updateShortUrlDto: UpdateShortUrlDto,
    user: JwtPayloadDto,
  ) {
    const shortUrl = await this.shortUrlRepository.findByIdAndUserId(
      user.id,
      id,
    );

    if (!shortUrl) {
      throw UrlNotFoundException();
    }

    return this.shortUrlRepository.update(id, {
      url: updateShortUrlDto.url,
      updated_at: new Date(),
    });
  }

  async remove(id: string, user: JwtPayloadDto) {
    const shortUrl = this.shortUrlRepository.findByIdAndUserId(id, user.id);

    if (!shortUrl) {
      throw UrlNotFoundException();
    }

    await this.shortUrlRepository.delete(id);
    return id;
  }
}
