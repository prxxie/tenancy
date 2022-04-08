import { Injectable } from '@nestjs/common';
import { TenantMigrateService } from '../tenant-migrate/tenant-migrate.service';
import { CreateTenantDto } from './dto/create-tenant.dto';
import { UpdateTenantDto } from './dto/update-tenant.dto';
import { Tenant } from './tenant.entity';
import { TenantRepository } from './tenant.repository';

@Injectable()
export class TenantsService {
  constructor(
    private readonly tenantRepository: TenantRepository,
    private readonly tenantMigrateService: TenantMigrateService,
  ) {}

  async create(createTenantDto: CreateTenantDto) {
    const newTenant = this.tenantRepository.create(createTenantDto);
    await this.tenantRepository.persist(newTenant);
    await this.tenantRepository.flush();

    await this.tenantMigrateService.migrate(newTenant.dbName);

    return newTenant;
  }

  async findAll(): Promise<Tenant[]> {
    return await this.tenantRepository.findAll();
  }

  async findOne(id: number): Promise<Tenant> {
    const tenant = await this.tenantRepository.findOne(id);
    return tenant;
  }

  update(id: number, updateTenantDto: UpdateTenantDto) {
    return `This action updates a #${id} tenant`;
  }

  remove(id: number) {
    return `This action removes a #${id} tenant`;
  }
}
