import { Test, TestingModule } from '@nestjs/testing';
import { UpdateTransactionService } from './update-transaction.service';

describe('UpdateTransactionService', () => {
  let service: UpdateTransactionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UpdateTransactionService],
    }).compile();

    service = module.get<UpdateTransactionService>(UpdateTransactionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
