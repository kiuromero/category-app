import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Category } from '../../../domain/models/category.model';
import { CategoryStatus } from '../../../domain/enums/category-status.enum';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss'],
})
export class CategoryFormComponent {
  @Input() set data(value: Category | null) {
    if (value) {
      this.form.patchValue(value);
    }
  }

  @Output() save = new EventEmitter<Category>();
  @Output() cancel = new EventEmitter<void>();

  form = this.fb.group({
    id: [''],
    code: ['', Validators.required],
    name: ['', Validators.required],
    description: [''],
    status: [CategoryStatus.ACTIVE],
  });

  constructor(private fb: FormBuilder) {}

  submit() {
    if (this.form.invalid) return;
    this.save.emit(this.form.value as Category);
  }
}
