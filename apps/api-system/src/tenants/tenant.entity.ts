import { CustomBaseEntity } from '@app/database/custom-base.entity';
import { Entity, EntityRepositoryType, Property } from '@mikro-orm/core';
import { TenantRepository } from './tenant.repository';

export enum TenantStatus {
  PENDING = 0,
  MIGRATED = 1,
  ACTIVED = 2,
}

@Entity({ customRepository: () => TenantRepository })
export class Tenant extends CustomBaseEntity {
  [EntityRepositoryType]?: TenantRepository;

  @Property()
  name: string;

  @Property()
  email: string;

  @Property({ default: TenantStatus.PENDING })
  status: TenantStatus = TenantStatus.PENDING;

  @Property({ nullable: true })
  get dbName(): string {
    return `tenant_${this.name}`;
  }
}
