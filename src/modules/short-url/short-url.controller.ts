import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ShortUrlService } from './short-url.service';
import { CreateShortUrlDto } from './dto/create-short-url.dto';
import { UpdateShortUrlDto } from './dto/update-short-url.dto';
import { AuthGuard } from '../auth/auth.guard';
import { JwtPayloadDto } from '../auth/dto/jwt-payload.dto';
import { CurrentUser } from 'src/decorators/current-user.decorator';

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
    return this.shortUrlService.create(createShortUrlDto, user);
  }

  @Get()
  findAll() {
    return this.shortUrlService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.shortUrlService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateShortUrlDto: UpdateShortUrlDto,
  ) {
    return this.shortUrlService.update(+id, updateShortUrlDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.shortUrlService.remove(+id);
  }
}
