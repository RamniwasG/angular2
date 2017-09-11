import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-app',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo-component.css']
})
export class TodoComponent implements OnInit {
  constructor() {}
  todos : any[];
  index:number;
  selectedIndex: number;
  item: String;
  
  ngOnInit() {
    this.item="";
    this.todos = [];
  }

  addItem() {
    this.todos.push(this.item);
    this.item = "";
  }

  editItem(index) {
    this.selectedIndex = index;
    this.item = this.todos[index];
  }

  updateItem() {
    this.todos[this.selectedIndex] = this.item;
    this.item = "";
  }

  deleteItem(index) {
    this.todos.splice(index, 1);
  }
}
