import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ToDo } from 'src/app/models/ToDo';
import { ToDoService } from '../../services/to-do.service';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.css']
})
export class ToDoItemComponent implements OnInit {

  @Input() todo: ToDo;
  @Output() deleteTodo: EventEmitter<ToDo> = new EventEmitter();

  constructor(private todoService: ToDoService) { }

  ngOnInit(): void {
  }

  // set dynamic classes
  setClasses() {
    const classes = {
      todo: true,
      isComplete: this.todo.completed
    };
    return classes;
  }

  onToggle(todo: ToDo) {
    // toggle in ui
    todo.completed = !todo.completed;
    // toggle on server
    this.todoService.toggleCompleted(todo).subscribe(todos => {
      console.log(todo);
    });
  }

  onDelete(todo: ToDo) {
    this.deleteTodo.emit(todo);
  }
}
