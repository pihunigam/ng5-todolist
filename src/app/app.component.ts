import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  model: any = {};
  tasksList: Array<any> = [];
  selection: Array<any> = [];

  constructor() { }

  ngOnInit() { }

  addTask() {
    this.tasksList.push(this.model);
    this.model = {};
  }

  makeSelection(option, event) {
    if (event.target.checked == true) {
      this.selection.push(option);
    } else {
      for (var i = 0; i < this.selection.length; i++) {
        if (option == this.selection[i]) {
          this.selection.splice(i, 1);
        }
      }
    }
  }

  deleteTasks() {
    var r = confirm('Are you sure to delete selected tasks?');

    if(r == true) {
      for (var j = 0; j < this.selection.length; j++) {
        this.tasksList.splice(this.selection[j], 1);
      }

      this.selection = [];
    }
  }
}