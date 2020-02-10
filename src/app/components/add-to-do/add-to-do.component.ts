import { Component, OnInit, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-add-to-do',
  templateUrl: './add-to-do.component.html',
  styleUrls: ['./add-to-do.component.css']
})
export class AddToDoComponent implements OnInit {

  @Output() addTodo: EventEmitter<any> = new EventEmitter();

  title: string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('add-to-do comp: onSubmit reached');
    const todo = {
      title: this.title,
      completed: false
    };

    this.addTodo.emit(todo);
  }

}
