import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../../types';
import { TodoService } from '../../services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  name: string;
  todoList$: Observable<TodoItem[]>;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.name = 'Aplikacja TODO';
    this.todoList$ = this.todoService.getTodo();
  }

  onTodoItemsChange(todoItems: TodoItem[]): void {
    this.todoService.saveTodo(todoItems);
  }
}
