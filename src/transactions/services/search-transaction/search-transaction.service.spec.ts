import { Test, TestingModule } from '@nestjs/testing';
import { SearchTransactionService } from './search-transaction.service';

describe('SearchTransactionService', () => {
  let service: SearchTransactionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SearchTransactionService],
    }).compile();

    service = module.get<SearchTransactionService>(SearchTransactionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
