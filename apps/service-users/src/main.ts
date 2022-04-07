import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ServiceUsersModule } from './service-users.module';

const logger = new Logger();

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    ServiceUsersModule,
    {
      transport: Transport.TCP,
      options: {
        host: '0.0.0.0',
        port: 8888,
      },
    },
  );

  await app.listen();
  logger.log('Microservice Users is listening', 'BOOT');
}
bootstrap();
