import { EntityRepository } from '@mikro-orm/mysql';
import { Tenant } from './tenant.entity';

export class TenantRepository extends EntityRepository<Tenant> {}
