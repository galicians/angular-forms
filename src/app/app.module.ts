import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DemoFormSkuComponentComponent } from './demo-form-sku-component/demo-form-sku-component.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, DemoFormSkuComponentComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
