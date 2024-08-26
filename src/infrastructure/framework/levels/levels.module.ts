import { Module } from '@nestjs/common';
import { LevelsController } from './levels.controller';
import {
  PrismaLevelsRepository,
  PrismaService,
} from 'src/infrastructure/data/prisma';
import { LevelsRepository } from 'src/core';
import { CreateLevelUseCase } from 'src/use-cases';

@Module({
  controllers: [LevelsController],
  providers: [
    PrismaService,
    {
      provide: LevelsRepository,
      useFactory: (prisma: PrismaService) => new PrismaLevelsRepository(prisma),
      inject: [PrismaService],
    },
    {
      provide: CreateLevelUseCase,
      useFactory: (repository: LevelsRepository) =>
        new CreateLevelUseCase(repository),
      inject: [LevelsRepository],
    },
  ],
})
export class LevelsModule {}
