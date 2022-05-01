import { Controller, Get, Headers, Req } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { AppService } from './app.service';

@ApiTags('status')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({
    summary: 'Status da aplicação',
  })
  getAppStatus(@Req() req: Request): string {
    const fullUrl = req.protocol + '://' + req.get('host'); // http://localhost:3333
    return this.appService.getAppStatus(fullUrl);
  }
}
