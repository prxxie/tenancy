import { Migration } from '@mikro-orm/migrations';

export class Migration20220407050643 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table `customer` add `email` varchar(255) not null;');
  }

  async down(): Promise<void> {
    this.addSql('alter table `customer` drop `email`;');
  }

}
