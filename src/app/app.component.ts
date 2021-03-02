import { Component } from '@angular/core';
import { TodoItem } from './shared/todoitem.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  todoList: TodoItem[] = [new TodoItem('Foo'), new TodoItem('Bar')];

  onTaskCreated(taskText: string) {
    this.todoList.push(new TodoItem(taskText));
  }

  onTaskDeleted(idToDelete: Number) {
    let index = this.todoList.findIndex((e) => e.id === idToDelete);
    this.todoList.splice(index, 1);
  }
}
