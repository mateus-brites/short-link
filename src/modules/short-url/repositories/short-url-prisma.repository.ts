import { Injectable } from '@nestjs/common';
import { IShortUrlRepository } from './short-url.interface.repository';
import { ShortUrl } from '@prisma/client';
import { UpdateShortUrlDto } from '../dto/update-short-url.dto';
import { PrismaService } from 'src/modules/prisma/prisma.service';

@Injectable()
export class PrismaShortUrlRepository implements IShortUrlRepository {
  constructor(private readonly prismaService: PrismaService) {}
  async create(url: string, short: string, userId: string): Promise<ShortUrl> {
    const shortUrl = await this.prismaService.shortUrl.create({
      data: { userId, url, clicks: 0, shorting: short },
    });

    return shortUrl;
  }

  findByShort(short: string): ShortUrl {
    return this.prismaService.shortUrl.findFirst({
      where: { shorting: short },
    })[0];
  }

  async delete(id: string): Promise<void> {
    await this.prismaService.shortUrl.delete({ where: { id } });
  }

  findById(id: string): ShortUrl {
    return this.prismaService.shortUrl.findFirst({ where: { id } })[0];
  }
  async update(id: string, data: UpdateShortUrlDto): Promise<ShortUrl> {
    const updated = await this.prismaService.shortUrl.update({
      data,
      where: { id },
    });

    return updated;
  }
}
