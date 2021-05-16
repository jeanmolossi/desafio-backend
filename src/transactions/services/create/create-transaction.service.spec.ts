import { Test, TestingModule } from "@nestjs/testing";
import { CreateTransactionService } from "./create-transaction.service";

describe("CreateTransactionService", () => {
  let service: CreateTransactionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateTransactionService],
    }).compile();

    service = module.get<CreateTransactionService>(CreateTransactionService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
