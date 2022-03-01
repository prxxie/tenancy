import { Injectable } from '@nestjs/common';

@Injectable()
export class ServiceCustomerService {
  getHello(): string {
    return 'Hello World!';
  }
}
