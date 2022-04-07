import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ApiSystemModule } from './api-system.module';

async function bootstrap() {
  const appOptions = { cors: true };

  const app = await NestFactory.create(ApiSystemModule, appOptions);

  app.useGlobalPipes(new ValidationPipe());

  const options = new DocumentBuilder()
    .setTitle('TTM ERP Sytem Apis')
    .setDescription('TTM ERP Sytem Apis documents')
    .setVersion('1.0')
    // .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('/docs', app, document);

  await app.listen(3000);
}
bootstrap();
