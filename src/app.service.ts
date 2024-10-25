import { Injectable } from '@nestjs/common';
import { Response } from 'express';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  redirect(url: string, res: Response): string {
    res.redirect(`${process.env.BASE_URL}/short-url/${url}`);
    return;
  }
}
