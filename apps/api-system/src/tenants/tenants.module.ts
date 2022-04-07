import { Module } from '@nestjs/common';
import { TenantsService } from './tenants.service';
import { TenantsController } from './tenants.controller';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Tenant } from './entities/tenant.entity';

@Module({
  imports: [MikroOrmModule.forFeature({ entities: [Tenant] })],
  controllers: [TenantsController],
  providers: [TenantsService],
})
export class TenantsModule {}
