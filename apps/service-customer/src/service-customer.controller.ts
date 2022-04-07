import { Controller, Get } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { ServiceCustomerService } from './service-customer.service';

@Controller()
export class ServiceCustomerController {
  constructor(
    private readonly serviceCustomerService: ServiceCustomerService,
  ) {}

  @MessagePattern('createCustomer')
  create(@Payload() createCustomerDto: CreateCustomerDto) {
    return this.serviceCustomerService.create(createCustomerDto);
  }

  @MessagePattern('findAllCustomers')
  findAll() {
    return this.serviceCustomerService.findAll();
  }

  @MessagePattern('findOneCustomer')
  findOne(@Payload() id: number) {
    return this.serviceCustomerService.findOne(id);
  }

  @MessagePattern('updateCustomer')
  update(@Payload() updateCustomerDto: UpdateCustomerDto) {
    return this.serviceCustomerService.update(
      updateCustomerDto.id,
      updateCustomerDto,
    );
  }

  @MessagePattern('removeCustomer')
  remove(@Payload() id: number) {
    return this.serviceCustomerService.remove(id);
  }
}
