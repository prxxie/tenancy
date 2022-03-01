import { CLIENT_SERVICE_AUTH } from '@app/service-discovery/service-registry';
import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ClientsModule.register([CLIENT_SERVICE_AUTH])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
