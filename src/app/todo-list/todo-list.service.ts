import { Injectable, EventEmitter } from '@angular/core';
import { TodoItem } from '../shared/todoitem.model';

@Injectable({ providedIn: 'root' })
export class TodoListService {
  private todoList: TodoItem[] = [new TodoItem('Foo')];
  listChanged = new EventEmitter<TodoItem[]>();

  getTodoList() {
    return this.todoList.slice();
  }

  deleteItem(id: number) {
    const index = this.todoList.findIndex((item: TodoItem) => item.id === id);
    this.todoList.splice(index, 1);
    this.listChanged.emit(this.todoList);
  }

  addItem(task: string) {
    this.todoList.push(new TodoItem(task));
    this.listChanged.emit(this.todoList);
  }
}
