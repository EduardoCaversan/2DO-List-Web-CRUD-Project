import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditTodoDialogComponent } from './edit-todo-dialog/edit-todo-dialog.component';
import {ProductService} from './services/product.service'
import { MatDialogModule } from '@angular/material/dialog';
import { ToolTipDirective } from './shared/tool-tip-singleton.directive';
import { ToolTipSingletonDirective } from './shared/tool-tip.directive';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemComponent,
    EditTodoDialogComponent,
    ToolTipDirective,
    ToolTipSingletonDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule
  ],
  providers: [ProductService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
