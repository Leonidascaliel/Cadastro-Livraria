import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product-component/product-component';

const routes: Routes = [
  {path: 'produtos', component: ProductComponent},
<<<<<<< HEAD

=======
>>>>>>> 070b4f724eec3e86e798480e8a55b02a4a80d1f4
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
