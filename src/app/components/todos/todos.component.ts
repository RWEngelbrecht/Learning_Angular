import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../../services/to-do.service';
import { ToDo } from '../../models/ToDo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: ToDo[];

  constructor(private todoService: ToDoService) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  deleteTodo(todo: ToDo) {
    console.log('delete me');
  }
}
