import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { map } from 'rxjs';

@Injectable()
export class AppService {
  constructor(
    @Inject('SERVICE_AUTH') private readonly clientServiceAuth: ClientProxy,
  ) {}

  getHello() {
    const startTs = Date.now();
    return this.clientServiceAuth
      .send<string>('createAuthenticate', {})
      .pipe(
        map((message: string) => ({ message, duration: Date.now() - startTs })),
      );
    // return 'Hello World!';
  }
}
