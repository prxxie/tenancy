import { Injectable } from '@nestjs/common';

@Injectable()
export class ApiSystemService {
  getHello(): string {
    return 'Hello World!';
  }
}
