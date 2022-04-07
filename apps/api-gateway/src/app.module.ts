import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersModule } from './customers/customers.module';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'SERVICE_AUTH',
        transport: Transport.TCP,
        options: {
          host: 'service-auth',
          port: 8888,
        },
      },
      {
        name: 'SERVICE_CUSTOMER',
        transport: Transport.TCP,
        options: {
          host: 'service-customer',
          port: 8888,
        },
      },
    ]),
    CustomersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
