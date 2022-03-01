import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ServiceAuthModule } from './service-auth.module';
import { Logger } from '@nestjs/common';

const logger = new Logger();

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    ServiceAuthModule,
    {
      transport: Transport.TCP,
      options: {
        host: '0.0.0.0',
        port: 8888,
      },
    },
  );
  await app.listen();
  logger.log('Microservice Authenticate is listening', 'BOOT');
}

bootstrap();
