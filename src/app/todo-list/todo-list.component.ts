import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../shared/todoitem.model';
import { TodoListService } from './todo-list.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todoList: TodoItem[] = [];
  constructor(private todoListService: TodoListService) {}

  ngOnInit(): void {
    this.todoList = this.todoListService.getTodoList();

    this.todoListService.listChanged.subscribe(
      (updatedList) => (this.todoList = updatedList)
    );
  }

  deleteRequestToApp(id: number) {
    this.todoListService.deleteItem(id);
  }
}
