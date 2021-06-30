import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoModule } from './todo/todo.module';
import { CheckingInModule } from './checking-in/checking-in-module.module';

import { services } from './todo/services';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TodoModule,
    CheckingInModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
