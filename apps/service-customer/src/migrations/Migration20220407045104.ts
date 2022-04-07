import { Migration } from '@mikro-orm/migrations';

export class Migration20220407045104 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table `customer` (`id` int unsigned not null auto_increment primary key, `created_at` datetime not null, `updated_at` datetime not null, `name` varchar(255) not null) default character set utf8mb4 engine = InnoDB;');
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists `customer`;');
  }

}
