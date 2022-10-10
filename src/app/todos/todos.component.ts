import { Component, OnInit } from '@angular/core';
import { Todo } from '../shared/todo.model';
import { DataService } from '../shared/data.service';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { EditTodoDialogComponent } from '../edit-todo-dialog/edit-todo-dialog.component';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos: Todo[] = []
  showValidationErrors!: boolean

  constructor(private dataService: DataService, private dialog: MatDialog, private http_service: ProductService) { }

  ngOnInit(): void {
   // this.todos = this.dataService.getAllTodos()
    this.fetchTarefas();
  }

  public fetchTarefas(): void {
    this.http_service.getTarefa().subscribe(
      res => {
        this.todos = res;
      }, error => {
        console.log("Erro!")
      }
     )
  }
  onFormSubmit(form: NgForm){
    if (form.invalid) return this.showValidationErrors = true
    var body = {
      Nome: form.value.Nome
    }
    this.http_service.postTarefa(body).subscribe(
      res => {
        this.fetchTarefas();
        form.reset()
      }, error => {
        console.log("Erro!")
      }
    )


  }

  toggleCompleted(todo: Todo) {
    todo.Concluida = !todo.Concluida;
  }

  editTodo(todo: Todo) {
    const index = this.todos.indexOf(todo)

    let dialogRef = this.dialog.open(EditTodoDialogComponent, {
      width: '700px',
      data: todo
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.dataService.updateTodo(index, result)
      }
    })
  }
  onDeleted(): void{
    this.fetchTarefas()
  }
  editClicked(): void{
    this.fetchTarefas()
  }
}
