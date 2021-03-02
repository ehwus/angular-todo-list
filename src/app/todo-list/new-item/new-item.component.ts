import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css'],
})
export class NewItemComponent implements OnInit {
  @Output() taskCreated = new EventEmitter<string>();

  newTask = '';
  constructor() {}

  ngOnInit(): void {}

  onNewTaskClick() {
    this.taskCreated.emit(this.newTask);
    this.newTask = '';
  }
}
