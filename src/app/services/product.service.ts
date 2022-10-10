import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Todo } from '../shared/todo.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  SERVER_URL = 'https://localhost:44350/api/'

  constructor(private http: HttpClient) { }
  public getTarefa(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.SERVER_URL}Tarefas`)
  }
  public postTarefa(body: any) {
    return this.http.post(`${this.SERVER_URL}Tarefas`, body);
  }
  public deleteTarefa(id: number) {
    return this.http.delete(`${this.SERVER_URL}Tarefas/${id}`)
  }
  public putNome(id: number, body: any) {
    return this.http.put(`${this.SERVER_URL}Tarefas/Nome/${id}`, body)
  }
  public putConclusão(id: number, body: any) {
    return this.http.put(`${this.SERVER_URL}Tarefas/Concluida/${id}`, body)
  }
}
