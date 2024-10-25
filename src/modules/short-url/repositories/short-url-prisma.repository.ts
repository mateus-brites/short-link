import { Injectable } from '@nestjs/common';
import { IShortUrlRepository } from './short-url.interface.repository';
import { ShortUrl } from '@prisma/client';
import { UpdateShortUrlDto } from '../dto/update-short-url.dto';
import { PrismaService } from 'src/modules/prisma/prisma.service';

@Injectable()
export class PrismaShortUrlRepository implements IShortUrlRepository {
  constructor(private readonly prismaService: PrismaService) {}
  findByIdAndUserId(userId: string, id: string): Promise<ShortUrl> {
    const short = this.prismaService.shortUrl.findFirst({
      where: { id, userId },
    });

    console.log({ short });
    return short;
  }
  async findByUserId(userId: string): Promise<ShortUrl[]> {
    return await this.prismaService.shortUrl.findMany({ where: { userId } });
  }
  async create(url: string, short: string, userId: string): Promise<ShortUrl> {
    const shortUrl = await this.prismaService.shortUrl.create({
      data: { userId, url, clicks: 0, shorting: short },
    });

    return shortUrl;
  }

  findByShort(short: string): Promise<ShortUrl> {
    return this.prismaService.shortUrl.findFirst({
      where: { shorting: short },
    });
  }

  async delete(id: string): Promise<void> {
    await this.prismaService.shortUrl.delete({ where: { id } });
  }

  findById(id: string): Promise<ShortUrl> {
    return this.prismaService.shortUrl.findFirst({ where: { id } });
  }
  async update(id: string, data: UpdateShortUrlDto): Promise<ShortUrl> {
    const updated = await this.prismaService.shortUrl.update({
      data,
      where: { id },
    });

    return updated;
  }
}
