import { Component, OnInit, Input } from '@angular/core';
import { TodoItem } from '../../shared/todoitem.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  @Input() item!: TodoItem;

  constructor() {}

  ngOnInit(): void {}
}
