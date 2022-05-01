import { Controller, Get, Headers, Req } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAppStatus(@Req() req: Request): string {
    const fullUrl = req.protocol + '://' + req.get('host'); // http://localhost:3333
    return this.appService.getAppStatus(fullUrl);
  }
}
