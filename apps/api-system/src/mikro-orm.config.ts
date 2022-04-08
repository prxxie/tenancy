import { MikroOrmModuleOptions as Options } from '@mikro-orm/nestjs';

const config: Options = {
  type: 'mysql',
  host: 'mariadb',
  port: 3306,
  user: 'root',
  password: process.env.DB_ROOT_PASSWORD,
  dbName: process.env.DB_DATABASE_NAME,
  entities: ['dist/apps/api-system/*.entity.js'],
  entitiesTs: ['apps/api-system/src/**/*.entity.ts'],
  migrations: {
    path: 'dist/api-system/migrations',
    pathTs: 'apps/api-system/src/migrations',
  },
};

export default config;
