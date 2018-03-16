import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { MembersComponent } from './members/members.component';
import {RouterModule} from '@angular/router'; //for html routing
import { SortPipe } from '../../app.sort';
@NgModule({
  declarations: [
    SortPipe,
    AppComponent,
    ProductComponent,
    MembersComponent
  ],
  imports: [
    FormsModule,
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
