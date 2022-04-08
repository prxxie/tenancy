import { CustomBaseEntity } from '@app/database/custom-base.entity';
import { Entity, Property } from '@mikro-orm/core';

@Entity()
export class Customer extends CustomBaseEntity {
  @Property()
  name: string;

  @Property()
  email: string;
}
