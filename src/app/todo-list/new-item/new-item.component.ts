import { Component, OnInit } from '@angular/core';
import { TodoListService } from '../todo-list.service';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css'],
})
export class NewItemComponent implements OnInit {
  newTask = '';
  constructor(private todoListService: TodoListService) {}

  ngOnInit(): void {}

  onNewTaskClick() {
    this.todoListService.addItem(this.newTask);
    this.newTask = '';
  }
}
