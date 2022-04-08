import { Migration } from '@mikro-orm/migrations';

export class Migration20220408031107 extends Migration {
  async up(): Promise<void> {
    this.addSql(
      'create table `tenant` (`id` int unsigned not null auto_increment primary key, `created_at` datetime not null, `updated_at` datetime not null, `name` varchar(255) not null, `email` varchar(255) not null, `status` int not null default 0, `db_name` varchar(255) null) default character set utf8mb4 engine = InnoDB;',
    );

    this.addSql('drop table if exists `customer`;');
  }

  async down(): Promise<void> {
    this.addSql(
      'create table `customer` (`id` int unsigned not null auto_increment primary key, `created_at` datetime not null, `updated_at` datetime not null, `name` varchar(255) not null, `email` varchar(255) not null) default character set utf8mb4 engine = InnoDB;',
    );

    this.addSql('drop table if exists `tenant`;');
  }
}
