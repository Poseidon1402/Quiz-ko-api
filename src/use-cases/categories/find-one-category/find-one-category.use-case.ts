import { CreatedCategoryMapper, CategoriesRepository, UseCase } from 'src/core';
import { CreatedCategoryDto } from 'src/shared';

export class FindOneCategoryUseCase implements UseCase<CreatedCategoryDto> {
  private createdCategoryMapper: CreatedCategoryMapper;

  constructor(private readonly repository: CategoriesRepository) {
    this.createdCategoryMapper = new CreatedCategoryMapper();
  }

  public async execute(id: string): Promise<CreatedCategoryDto> {
    const category = await this.repository.findOne(id);
    return this.createdCategoryMapper.mapTo(category);
  }
}
