import { Injectable } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  todos: Todo[] = [
  ]

  constructor(private http_service: ProductService) { }

  getAllTodos() {
    return this.todos
  }

  addTodo(todo: Todo) {
    this.todos.push(todo)
  }

  updateTodo(index: number, updatedTodo: Todo) {
    this.todos[index] = updatedTodo
  }

}
