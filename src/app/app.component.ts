import { Component } from '@angular/core';
import { TodoItem } from './shared/todoitem.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  todoList: TodoItem[] = [new TodoItem('Foo'), new TodoItem('Bar')];

  onTaskCreated(event: string) {
    this.todoList.push(new TodoItem(event));
  }
}
