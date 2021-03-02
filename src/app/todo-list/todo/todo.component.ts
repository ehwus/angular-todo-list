import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TodoItem } from '../../shared/todoitem.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  @Input() item!: TodoItem;
  @Output() itemDeleted = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  onClickDelete() {
    this.itemDeleted.emit(this.item.id);
  }
}
