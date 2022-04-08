import { LoadStrategy } from '@mikro-orm/core';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { SqlHighlighter } from '@mikro-orm/sql-highlighter';
import { Logger, Module } from '@nestjs/common';
import { ApiSystemController } from './api-system.controller';
import { ApiSystemService } from './api-system.service';
import config from './mikro-orm.config';
import { TenantsModule } from './tenants/tenants.module';

const logger = new Logger('MasterDB');

@Module({
  imports: [
    MikroOrmModule.forRoot({
      autoLoadEntities: true,
      logger: logger.log.bind(logger),
      debug: true,
      cache: { enabled: false },
      highlighter: new SqlHighlighter(),
      ...config,
    }),
    TenantsModule,
  ],
  controllers: [ApiSystemController],
  providers: [ApiSystemService],
})
export class ApiSystemModule {}
