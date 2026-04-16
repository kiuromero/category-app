import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryRepository } from '../../infrastructure/repositories/category.repository';
import { Category } from '../../domain/models/category.model';
import { CategoryStatus } from '../../domain/enums/category-status.enum';

@Injectable({ providedIn: 'root' })
export class CategoryService {
  constructor(private repo: CategoryRepository) {}

  load(): Observable<Category[]> {
    return this.repo.getAll();
  }

  create(category: Category): void {
    this.repo.create(category);
  }

  update(category: Category): void {
    this.repo.update(category);
  }

  toggleStatus(category: Category): void {
    const updated = {
      ...category,
      status:
        category.status === CategoryStatus.ACTIVE
          ? CategoryStatus.INACTIVE
          : CategoryStatus.ACTIVE
    };

    this.repo.update(updated);
  }
}