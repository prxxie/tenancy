import { Test, TestingModule } from '@nestjs/testing';
import { ServiceCustomerController } from './service-customer.controller';
import { ServiceCustomerService } from './service-customer.service';

describe('ServiceCustomerController', () => {
  let serviceCustomerController: ServiceCustomerController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ServiceCustomerController],
      providers: [ServiceCustomerService],
    }).compile();

    serviceCustomerController = app.get<ServiceCustomerController>(
      ServiceCustomerController,
    );
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(serviceCustomerController.getHello()).toBe('Hello World!');
    });
  });
});
