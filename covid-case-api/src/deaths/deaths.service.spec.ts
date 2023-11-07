import { Test, TestingModule } from '@nestjs/testing';
import { DeathsService } from './deaths.service';

describe('DeathsService', () => {
  let service: DeathsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeathsService],
    }).compile();

    service = module.get<DeathsService>(DeathsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
