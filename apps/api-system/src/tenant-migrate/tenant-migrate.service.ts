import { MikroORM } from '@mikro-orm/core';
import { Injectable } from '@nestjs/common';
import config from '../mikro-orm.config';

@Injectable()
export class TenantMigrateService {
  async migrate(dbName: string): Promise<boolean> {
    const orm = await MikroORM.init({
      ...config,
      dbName,
      entities: ['dist/apps/**'],
      entitiesTs: ['apps/**/src/**/*.entity.ts'],
      migrations: {
        path: 'dist/**/migrations',
        pathTs: 'apps/**/src/migrations',
      },
    });

    const migrator = orm.getMigrator();

    await migrator.up();

    return true;
  }
}
