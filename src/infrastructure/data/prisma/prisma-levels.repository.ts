import { LevelEntity, LevelsRepository } from 'src/core';
import { PrismaService } from './prisma.service';

export class PrismaLevelsRepository implements LevelsRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: LevelEntity): Promise<LevelEntity> {
    return this.prisma.level.create({ data });
  }
  findAll(filer?: Partial<LevelEntity>): Promise<LevelEntity[]> {
    throw new Error('Method not implemented.');
  }
  findOne(id: string): Promise<LevelEntity> {
    throw new Error('Method not implemented.');
  }
  update(id: string, data: Partial<LevelEntity>): Promise<LevelEntity> {
    throw new Error('Method not implemented.');
  }
  remove(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
