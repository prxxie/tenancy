import { MikroORM } from '@mikro-orm/core';
import { MikroOrmMiddleware, MikroOrmModule } from '@mikro-orm/nestjs';
import {
  MiddlewareConsumer,
  Module,
  NestModule,
  OnModuleInit,
} from '@nestjs/common';
import { ApiSystemController } from './api-system.controller';
import { ApiSystemService } from './api-system.service';
import config from './mikro-orm.config';
import { TenantsModule } from './tenants/tenants.module';

@Module({
  imports: [MikroOrmModule.forRoot(config), TenantsModule],
  controllers: [ApiSystemController],
  providers: [ApiSystemService],
})
export class ApiSystemModule implements NestModule, OnModuleInit {
  constructor(private readonly orm: MikroORM) {}

  async onModuleInit(): Promise<void> {
    await this.orm.getMigrator().up();
  }

  // for some reason the auth middlewares in profile and article modules are fired before the request context one,
  // so they would fail to access contextual EM. by registering the middleware directly in AppModule, we can get
  // around this issue
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(MikroOrmMiddleware).forRoutes('*');
  }
}
