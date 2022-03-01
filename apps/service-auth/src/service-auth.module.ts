import { Module } from '@nestjs/common';
import { ServiceAuthController } from './service-auth.controller';
import { ServiceAuthService } from './service-auth.service';
import { AuthenticateModule } from './authenticate/authenticate.module';

@Module({
  imports: [AuthenticateModule],
  controllers: [ServiceAuthController],
  providers: [ServiceAuthService],
})
export class ServiceAuthModule {}
