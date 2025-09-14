import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product-component/product-component';
import { HomeComponent } from './home-component/home-component';
import { ClientesComponent } from './clientes-component/clientes-component';

const routes: Routes = [
  {path: 'produtos', component: ProductComponent},
  {path: '', component: HomeComponent},
  {path: 'clientes', component: ClientesComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
