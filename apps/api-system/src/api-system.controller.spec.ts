import { Test, TestingModule } from '@nestjs/testing';
import { ApiSystemController } from './api-system.controller';
import { ApiSystemService } from './api-system.service';

describe('ApiSystemController', () => {
  let apiSystemController: ApiSystemController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ApiSystemController],
      providers: [ApiSystemService],
    }).compile();

    apiSystemController = app.get<ApiSystemController>(ApiSystemController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(apiSystemController.getHello()).toBe('Hello World!');
    });
  });
});
