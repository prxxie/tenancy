import { BaseEntity } from "@app/database/base.entity";
import { Entity, Property } from "@mikro-orm/core";

@Entity()
export class Customer extends BaseEntity {
  @Property()
  name: string;

  @Property()
  email: string;

}