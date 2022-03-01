import { Module } from '@nestjs/common';
import { ServiceCustomerController } from './service-customer.controller';
import { ServiceCustomerService } from './service-customer.service';

@Module({
  imports: [],
  controllers: [ServiceCustomerController],
  providers: [ServiceCustomerService],
})
export class ServiceCustomerModule {}
