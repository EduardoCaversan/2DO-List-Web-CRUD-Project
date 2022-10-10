import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Todo } from '../shared/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input()
  todo!: Todo;
  @Output() todoClicked: EventEmitter<void> = new EventEmitter()
  @Output() editClicked: EventEmitter<void> = new EventEmitter()
  @Output() onDeleted: EventEmitter<void> = new EventEmitter()
  constructor(private http_service: ProductService) { }

  ngOnInit(): void {
  }

  onTodoClicked(id: number): void {
    var body = {
      Concluida: !this.todo.Concluida
    }
    console.log(body)
    this.http_service.putConclusão(id, body).subscribe(
      () => {
        this.todoClicked.emit()
      }, () => {
        console.log("Erro!")
      }
    )
  }

  onEditClicked() {
    this.editClicked.emit()
  }

  onDeleteClicked(Id: number): void {
    this.http_service.deleteTarefa(Id).subscribe(
      () => {
        this.onDeleted.emit()
      }, () => {
        console.log("Erro!")
      }
    )
  }


}
