import { BaseEntity } from '@app/database/base.entity';
import { Entity, EntityRepositoryType, Property } from '@mikro-orm/core';
import { TenantRepository } from '../repositories/tenant.repository';

export enum TenantStatus {
  PENDING = 0,
  MIGRATED = 1,
  ACTIVED = 2,
}

@Entity({ customRepository: () => TenantRepository })
export class Tenant extends BaseEntity {
  [EntityRepositoryType]?: TenantRepository;

  @Property()
  name: string;

  @Property()
  email: string;

  @Property()
  status: TenantStatus;

  @Property()
  dbName: string;
}
