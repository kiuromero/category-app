import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, delay } from 'rxjs';
import { Category } from '../../domain/models/category.model';
import { CategoryStatus } from '../../domain/enums/category-status.enum';

@Injectable({ providedIn: 'root' })
export class CategoryRepository {
  private categories$ = new BehaviorSubject<Category[]>([
    {
      id: '1',
      code: 'CAT-001',
      name: 'Tecnología',
      description: 'Categoría tech',
      status: CategoryStatus.ACTIVE,
    },
    {
      id: '2',
      code: 'CAT-002',
      name: 'Electrónica',
      description: 'Categoría electrónica',
      status: CategoryStatus.INACTIVE,
    },
    {
      id: '3',
      code: 'CAT-003',
      name: 'Hogar',
      description: 'Categoría hogar',
      status: CategoryStatus.ACTIVE,
    },
  ]);

  getAll(): Observable<Category[]> {
    return this.categories$.asObservable().pipe(delay(300));
  }

  create(category: Category): void {
    this.categories$.next([...this.categories$.value, category]);
  }

  update(category: Category): void {
    const updated = this.categories$.value.map((c) =>
      c.id === category.id ? category : c,
    );
    this.categories$.next(updated);
  }
}
