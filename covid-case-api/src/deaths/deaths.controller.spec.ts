import { Test, TestingModule } from '@nestjs/testing';
import { DeathsController } from './deaths.controller';

describe('DeathsController', () => {
  let controller: DeathsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeathsController],
    }).compile();

    controller = module.get<DeathsController>(DeathsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
