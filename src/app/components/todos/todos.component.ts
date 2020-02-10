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
    // get array of todo items with service method
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  deleteTodo(todo: ToDo) {
    // delete from ui
                  // return all todo items with id != to id you want to delete
    this.todos = this.todos.filter(t => t.id !== todo.id);
    // deletes from server
    this.todoService.deleteTodo(todo).subscribe();
  }

  addTodo(todo: ToDo) {
    console.log(`todos comp: addTodo reached`);
    this.todoService.addTodo(todo).subscribe(toDo => {
      this.todos.push(toDo);
    });
  }
}
