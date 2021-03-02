import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoItem } from '../shared/todoitem.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  @Input() todoList!: TodoItem[];
  @Output() deleteItemRequest = new EventEmitter<Number>();

  constructor() {}

  ngOnInit(): void {}

  deleteRequestToApp(id: Number) {
    this.deleteItemRequest.emit(id);
  }
}
