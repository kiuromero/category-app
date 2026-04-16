import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CategoryListPageComponent } from './features/categories/presentation/pages/category-list/category-list-page.component';
import { CategoryFormComponent } from './features/categories/presentation/components/category-form/category-form.component';
import { ModalComponent } from './shared/components/organisms/modal/modal.component';
import { TableComponent } from './shared/components/organisms/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryListPageComponent,
    CategoryFormComponent,
    ModalComponent,
    TableComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
