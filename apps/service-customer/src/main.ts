import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ServiceCustomerModule } from './service-customer.module';

const logger = new Logger();

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    ServiceCustomerModule,
    {
      transport: Transport.TCP,
      options: {
        host: '0.0.0.0',
        port: 8888,
      },
    },
  );
  await app.listen();
  logger.log('Microservice Customer is listening', 'BOOT');
}
bootstrap();
