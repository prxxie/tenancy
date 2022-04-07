import { Injectable } from '@nestjs/common';

@Injectable()
export class ServiceUsersService {
  getHello(): string {
    return 'Hello World!';
  }
}
