import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
=======

>>>>>>> 070b4f724eec3e86e798480e8a55b02a4a80d1f4
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { NavBarComponent } from './nav-bar-component/nav-bar-component';
import { FooterComponent } from './footer-component/footer-component';
import { provideHttpClient } from '@angular/common/http';
import { ProductComponent } from './product-component/product-component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
<<<<<<< HEAD
=======
import { Product } from './product';
>>>>>>> 070b4f724eec3e86e798480e8a55b02a4a80d1f4

@NgModule({
  declarations: [
    App,
    NavBarComponent,
    FooterComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient()
  ],
  bootstrap: [App]
})
export class AppModule { }
