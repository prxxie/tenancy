import { Controller, Get } from '@nestjs/common';
import { ApiSystemService } from './api-system.service';

@Controller()
export class ApiSystemController {
  constructor(private readonly apiSystemService: ApiSystemService) {}

  @Get()
  getHello(): string {
    return this.apiSystemService.getHello();
  }
}
