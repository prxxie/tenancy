import { MikroOrmModuleOptions as Options } from '@mikro-orm/nestjs';
import { SqlHighlighter } from '@mikro-orm/sql-highlighter';
import { LoadStrategy } from '@mikro-orm/core';

const config: Options = {
  type: 'mysql',
  host: 'mariadb',
  port: 3306,
  user: 'root',
  password: process.env.DB_ROOT_PASSWORD,
  dbName: process.env.DB_DATABASE_NAME,
  autoLoadEntities: true,
  loadStrategy: LoadStrategy.JOINED,
  highlighter: new SqlHighlighter(),
  registerRequestContext: false,
  migrations: {
    path: 'dist/api-system/migrations',
    pathTs: 'apps/api-system/src/migrations',
  },
};

export default config;
