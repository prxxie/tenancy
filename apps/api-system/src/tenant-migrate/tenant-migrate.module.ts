import { Module } from '@nestjs/common';
import { TenantMigrateService } from './tenant-migrate.service';

@Module({
  providers: [TenantMigrateService],
  exports: [TenantMigrateService],
})
export class TenantMigrateModule {}
