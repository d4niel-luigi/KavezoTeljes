import { Test, TestingModule } from '@nestjs/testing';
import { KoncertekController } from './koncertek.controller';
import { KoncertekService } from './koncertek.service';
import { PrismaClient } from '@prisma/client';

describe('KoncertekController', () => {
  let controller: KoncertekController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KoncertekController],
      providers: [KoncertekService, PrismaClient],
    }).compile();

    controller = module.get<KoncertekController>(KoncertekController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
