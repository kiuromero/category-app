import { Component } from '@angular/core';
import { CategoryFacade } from '../../facades/category.facade';
import { Category } from '../../../domain/models/category.model';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-category-list-page',
  templateUrl: './category-list-page.component.html',
  styleUrls: ['./category-list-page.component.scss'],
})
export class CategoryListPageComponent {
  vm$ = this.facade.vm$;

  isModalOpen = false;
  selected: Category | null = null;

  columns = [
    { key: 'code', label: 'Código' },
    { key: 'name', label: 'Nombre' },
    { key: 'status', label: 'Estado' },
  ] as const;

  constructor(public facade: CategoryFacade) {}

  search(term: string) {
    this.facade.search(term);
  }

  openCreate() {
    this.selected = null;
    this.isModalOpen = true;
  }

  openEdit(category: Category) {
    this.selected = category;
    this.isModalOpen = true;
  }

  save(category: Category) {
    if (!category.id) {
      this.facade.create({ ...category, id: uuid() });
    } else {
      this.facade.update(category);
    }

    alert('Categoría guardada');
    this.isModalOpen = false;
  }
}
