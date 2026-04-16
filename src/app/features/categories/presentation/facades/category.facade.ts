import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, map, catchError, of, tap } from 'rxjs';
import { CategoryService } from '../../application/services/category.service';
import { Category } from '../../domain/models/category.model';

type CategoryState = {
  data: Category[];
  loading: boolean;
  error: boolean;
};

@Injectable({ providedIn: 'root' })
export class CategoryFacade {
  private state$ = new BehaviorSubject<CategoryState>({
    data: [],
    loading: true,
    error: false,
  });

  private search$ = new BehaviorSubject<string>('');

  vm$ = combineLatest([this.state$, this.search$]).pipe(
    map(([state, search]) => {
      const filtered = state.data.filter(
        (c) =>
          c.name.toLowerCase().includes(search.toLowerCase()) ||
          c.code.toLowerCase().includes(search.toLowerCase()),
      );

      return {
        ...state,
        data: filtered,
      };
    }),
  );

  constructor(private service: CategoryService) {
    this.load();
  }

  load(): void {
    this.state$.next({ ...this.state$.value, loading: true });

    this.service
      .load()
      .pipe(
        tap((data) => this.state$.next({ data, loading: false, error: false })),
        catchError(() => {
          this.state$.next({ data: [], loading: false, error: true });
          return of([]);
        }),
      )
      .subscribe();
  }

  search(term: string) {
    this.search$.next(term);
  }

  create(category: Category) {
    this.service.create(category);
    this.load();
  }

  update(category: Category) {
    this.service.update(category);
    this.load();
  }

  toggle(category: Category) {
    this.service.toggleStatus(category);
    this.load();
  }
}
