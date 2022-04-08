import { Module } from '@nestjs/common';
import { TenantsService } from './tenants.service';
import { TenantsController } from './tenants.controller';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Tenant } from './tenant.entity';
import { TenantMigrateModule } from '../tenant-migrate/tenant-migrate.module';

@Module({
  imports: [
    MikroOrmModule.forFeature({ entities: [Tenant] }),
    TenantMigrateModule,
  ],
  controllers: [TenantsController],
  providers: [TenantsService],
})
export class TenantsModule {}
