import { Component, OnInit } from '@angular/core';
import { PassengerDetails } from '../../types';
import { PassengersService } from '../../services/';

@Component({
  selector: 'app-passengers',
  templateUrl: './passengers.component.html',
  styleUrls: ['./passengers.component.scss']
})
export class PassengersComponent implements OnInit {
  name: string;
  passengerList: PassengerDetails[];

  constructor(private passengerService: PassengersService) { }

  ngOnInit(): void {
    this.name = 'Passengers-container'
    this.passengerList = this.passengerService.getPassengers();
  }
}


// import { Component, OnInit } from '@angular/core';
// import { TodoItem } from '../../types';
// import { TodoService } from '../../services';
// import { Observable } from 'rxjs';

// @Component({
//   selector: 'app-todo',
//   templateUrl: './todo.component.html',
//   styleUrls: ['./todo.component.scss']
// })
// export class TodoComponent implements OnInit {
//   name: string;
//   todoList$: Observable<TodoItem[]>;

//   constructor(private todoService: TodoService) {}

//   ngOnInit(): void {
//     this.name = 'Aplikacja TODO';
//     this.todoList$ = this.todoService.getTodo();
//   }

//   onTodoItemsChange(todoItems: TodoItem[]): void {
//     this.todoService.saveTodo(todoItems);
//   }
// }
