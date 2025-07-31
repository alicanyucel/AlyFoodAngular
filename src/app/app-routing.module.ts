
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductionComponent } from './components/product/product.component';

const routes: Routes = [
  { path: '', component: ProductionComponent },
  { path: 'product', component: ProductionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
