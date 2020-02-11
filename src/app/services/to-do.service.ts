import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToDo } from '../models/ToDo';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class ToDoService {

  todosUrl = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit = '?_limit=5';

  constructor(private http: HttpClient) { }

  getTodos(): Observable<ToDo[]> {
    // return array of jsonplaceholder todo items
    return this.http.get<ToDo[]>(`${this.todosUrl}${this.todosLimit}`);
  }

  toggleCompleted(todo: ToDo): Observable<any> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.put(url, todo, httpOptions);
  }

  deleteTodo(todo: ToDo): Observable<ToDo> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.delete<ToDo>(url, httpOptions);
  }

  addTodo(todo: ToDo): Observable<ToDo> {
    console.log("todoService: "+todo.title);
    return this.http.post<ToDo>(this.todosUrl, todo, httpOptions);
  }
}
