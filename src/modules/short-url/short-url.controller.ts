import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Res,
} from '@nestjs/common';
import { ShortUrlService } from './short-url.service';
import { CreateShortUrlDto } from './dto/create-short-url.dto';
import { UpdateShortUrlDto } from './dto/update-short-url.dto';
import { AuthGuard } from '../auth/auth.guard';
import { JwtPayloadDto } from '../auth/dto/jwt-payload.dto';
import { CurrentUser } from 'src/decorators/current-user.decorator';
import { Response } from 'express';

@Controller('short-url')
export class ShortUrlController {
  constructor(private readonly shortUrlService: ShortUrlService) {}

  @Post()
  @UseGuards(AuthGuard)
  create(
    @Body() createShortUrlDto: CreateShortUrlDto,
    @CurrentUser()
    user: JwtPayloadDto,
  ) {
    console.log({ user });
    return this.shortUrlService.create(createShortUrlDto, user);
  }

  @Get()
  @UseGuards(AuthGuard)
  findAll(
    @CurrentUser()
    user: JwtPayloadDto,
  ) {
    return this.shortUrlService.findAll(user);
  }

  @Get(':url')
  findOne(@Param('url') url: string, @Res() res: Response) {
    return this.shortUrlService.findOne(url, res);
  }

  @Patch(':id')
  @UseGuards(AuthGuard)
  update(
    @Param('id') id: string,
    @Body() updateShortUrlDto: UpdateShortUrlDto,
    @CurrentUser()
    user: JwtPayloadDto,
  ) {
    return this.shortUrlService.update(id, updateShortUrlDto, user);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  remove(
    @Param('id') id: string,
    @CurrentUser()
    user: JwtPayloadDto,
  ) {
    return this.shortUrlService.remove(id, user);
  }
}
