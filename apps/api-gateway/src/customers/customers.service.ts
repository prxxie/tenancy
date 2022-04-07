import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { map } from 'rxjs';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Injectable()
export class CustomersService {
  constructor(
    @Inject('SERVICE_CUSTOMER')
    private readonly clientServiceCustomer: ClientProxy,
  ) {}

  create(createCustomerDto: CreateCustomerDto) {
    return this.clientServiceCustomer
      .send<string>('createCustomer', {})
      .pipe(map((message: string) => ({ message, duration: Date.now() })));
  }

  findAll() {
    return `This action returns all customers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} customer`;
  }

  update(id: number, updateCustomerDto: UpdateCustomerDto) {
    return `This action updates a #${id} customer`;
  }

  remove(id: number) {
    return `This action removes a #${id} customer`;
  }
}
