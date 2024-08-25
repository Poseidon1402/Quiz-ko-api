import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import {
  PrismaService,
  PrismaUsersRepository,
} from 'src/infrastructure/data/prisma';
import { UsersRepository } from 'src/core';
import { CreateUserUseCase } from 'src/use-cases';

@Module({
  controllers: [UsersController],
  providers: [
    PrismaService,
    {
      provide: UsersRepository,
      useFactory: (prisma: PrismaService) => new PrismaUsersRepository(prisma),
      inject: [PrismaService],
    },
    {
      provide: CreateUserUseCase,
      useFactory: (repository: UsersRepository) =>
        new CreateUserUseCase(repository),
      inject: [UsersRepository],
    },
  ],
})
export class UsersModule {}
