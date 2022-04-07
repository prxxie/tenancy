import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { ServiceCustomerController } from './service-customer.controller';
import { ServiceCustomerService } from './service-customer.service';

@Module({
  imports: [
    MikroOrmModule.forRoot()
  ],
  controllers: [ServiceCustomerController],
  providers: [ServiceCustomerService],
})
export class ServiceCustomerModule {}
