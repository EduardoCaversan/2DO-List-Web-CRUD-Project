import { formatCurrency } from '@angular/common';
import { Component, OnInit, Inject, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductService } from '../services/product.service';
import { Todo } from '../shared/todo.model';

@Component({
  selector: 'app-edit-todo-dialog',
  templateUrl: './edit-todo-dialog.component.html',
  styleUrls: ['./edit-todo-dialog.component.scss']
})
export class EditTodoDialogComponent implements OnInit {

  @Input()
  todos!: Todo;
  @Output() editClicked: EventEmitter<void> = new EventEmitter()

  constructor(
    public dialogRef: MatDialogRef<EditTodoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public todo: Todo,
    private http_service: ProductService) { }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close()
  }

  onFormSubmit(form: NgForm, Id: number) {
    var body = {
      Nome: this.todo.Nome
    }
    console.log(body)
    this.http_service.putNome(Id, body).subscribe(
      res => {
        this.editClicked.emit()
      }, error => {
        console.log("Erro!")
      }
    )



    this.dialogRef.close()
  }

}
