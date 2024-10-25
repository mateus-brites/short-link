import { Module } from '@nestjs/common';
import { ShortUrlService } from './short-url.service';
import { ShortUrlController } from './short-url.controller';
import { PrismaService } from '../prisma/prisma.service';
import { PrismaShortUrlRepository } from './repositories/short-url-prisma.repository';

@Module({
  controllers: [ShortUrlController],
  providers: [
    ShortUrlService,
    PrismaService,
    { provide: 'ShortUrlRepository', useClass: PrismaShortUrlRepository },
  ],
})
export class ShortUrlModule {}
