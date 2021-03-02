import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css'],
})
export class NewItemComponent implements OnInit {
  newTask = '';
  constructor() {}

  ngOnInit(): void {}

  onNewTaskClick() {
    console.log(this.newTask);
  }
}
