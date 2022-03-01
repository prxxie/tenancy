import { NestFactory } from '@nestjs/core';
import { ServiceCustomerModule } from './service-customer.module';

async function bootstrap() {
  const app = await NestFactory.create(ServiceCustomerModule);
  await app.listen(3000);
}
bootstrap();
