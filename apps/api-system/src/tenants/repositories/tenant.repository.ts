import { EntityRepository } from '@mikro-orm/mysql';
import { Tenant } from '../entities/tenant.entity';

export class TenantRepository extends EntityRepository<Tenant> {

}