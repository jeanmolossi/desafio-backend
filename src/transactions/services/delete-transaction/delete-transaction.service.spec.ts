import { Test, TestingModule } from '@nestjs/testing';
import { DeleteTransactionService } from './delete-transaction.service';

describe('DeleteTransactionService', () => {
  let service: DeleteTransactionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeleteTransactionService],
    }).compile();

    service = module.get<DeleteTransactionService>(DeleteTransactionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
