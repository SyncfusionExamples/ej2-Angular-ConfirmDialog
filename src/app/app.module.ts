import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DialogComponent } from '@syncfusion/ej2-ng-popups';
import { AppComponent }  from './app.component';
import { DropDownListComponent } from '@syncfusion/ej2-ng-dropdowns';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, DialogComponent, DropDownListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
