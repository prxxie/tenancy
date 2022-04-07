import { Controller, Get } from '@nestjs/common';
import { ServiceUsersService } from './service-users.service';

@Controller()
export class ServiceUsersController {
  constructor(private readonly serviceUsersService: ServiceUsersService) {}

  @Get()
  getHello(): string {
    return this.serviceUsersService.getHello();
  }
}
