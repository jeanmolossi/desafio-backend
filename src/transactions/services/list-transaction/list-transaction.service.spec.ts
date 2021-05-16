import { Test, TestingModule } from '@nestjs/testing';
import { ListTransactionService } from './list-transaction.service';

describe('ListTransactionService', () => {
  let service: ListTransactionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ListTransactionService],
    }).compile();

    service = module.get<ListTransactionService>(ListTransactionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
