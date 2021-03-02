import { Component, OnInit, Input } from '@angular/core';
import { TodoItem } from '../shared/todoitem.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  @Input() todoList!: TodoItem[];

  constructor() {}

  ngOnInit(): void {}
}
