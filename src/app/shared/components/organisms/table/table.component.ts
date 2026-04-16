import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent<T> {
  @Input() data: T[] = [];
  @Input() columns: readonly { key: keyof T; label: string }[] = [];

  @Output() edit = new EventEmitter<T>();
  @Output() toggle = new EventEmitter<T>();
}
