import { Controller, Get } from '@nestjs/common';
import { ServiceCustomerService } from './service-customer.service';

@Controller()
export class ServiceCustomerController {
  constructor(
    private readonly serviceCustomerService: ServiceCustomerService,
  ) {}

  @Get()
  getHello(): string {
    return this.serviceCustomerService.getHello();
  }
}
