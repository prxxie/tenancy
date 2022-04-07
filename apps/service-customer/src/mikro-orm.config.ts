import { MikroOrmModuleOptions as Options } from '@mikro-orm/nestjs';
import { SqlHighlighter } from '@mikro-orm/sql-highlighter';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import { LoadStrategy } from '@mikro-orm/core';

const config: Options = {
  type: 'mysql',
  host: 'mariadb',
  port: 3306,
  user: 'root',
  password: process.env.DB_ROOT_PASSWORD,
  dbName: process.env.DB_DATABASE_NAME,
  entities: ['dist/service-customer/**/*.entity.js'],
  entitiesTs: ['apps/service-customer/**/*.entity.ts'],
  debug: true,
  loadStrategy: LoadStrategy.JOINED,
  highlighter: new SqlHighlighter(),
  metadataProvider: TsMorphMetadataProvider,
  registerRequestContext: false,
  migrations: {
    path: 'dist/service-customer/migrations',
    pathTs: 'apps/service-customer/src/migrations',
  },
};

export default config;