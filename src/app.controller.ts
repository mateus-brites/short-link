import { Controller, Get, Param, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':url')
  findOne(@Param('url') url: string, @Res() res: Response) {
    return this.appService.redirect(url, res);
  }
}
