import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';


import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { MembersComponent } from './members/members.component';
import {RouterModule} from '@angular/router'; //for html routing

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    MembersComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
 {     path: 'member',
      component: MembersComponent
    },
    {
      path: 'product',
      component: ProductComponent

    }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
