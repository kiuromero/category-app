import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListPageComponent } from './features/categories/presentation/pages/category-list/category-list-page.component';

const routes: Routes = [
  { path: 'categories', component: CategoryListPageComponent },
  { path: '', redirectTo: 'categories', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
