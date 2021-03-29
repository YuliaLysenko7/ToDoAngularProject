import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { TaskComponent } from './task/task.component';
import { HttpClientModule } from '@angular/common/http';
import { ToDoComponent } from './to-do/to-do.component';
import { HomeComponent } from './home/home.component';
import { RoutingModuleModule } from './routing-module/routing-module.module';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    TaskComponent,
    ToDoComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    RoutingModuleModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
