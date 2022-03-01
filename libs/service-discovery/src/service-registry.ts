import { Transport } from '@nestjs/microservices';
import { MICROSERVICE_DEFAULT_PORT } from './constant';

export const TCP_TRANSPORT = Transport.TCP;

export const CLIENT_SERVICE_AUTH = {
  name: 'SERVICE_AUTH',
  transport: TCP_TRANSPORT,
  options: {
    host: 'service-auth',
    port: MICROSERVICE_DEFAULT_PORT,
  },
};

export const ServiceRegistry = [CLIENT_SERVICE_AUTH];
