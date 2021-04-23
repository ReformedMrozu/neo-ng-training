import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoService } from '../../services';
import { TodoItem } from '../../types';

@Component({
  selector: 'app-todo-list',
  template: `
    <div *ngIf="todoItems.length > 0; else noItems">
       <ul class="todo-list">
        <app-todo-item *ngFor="let item of todoItems" [item]="item" (checked)="onChecked($event, item.title)" (deleted)="onDeleted(item.title)"></app-todo-item>

      </ul>
    </div>
    <ng-template #noItems>
      <ng-content></ng-content>
    </ng-template>
  `,
  providers: [
    TodoService
  ]
})
export class TodoListComponent {
  @Input() todoItems: TodoItem[];
  @Output() todoItemsChange = new EventEmitter<TodoItem[]>();

  onChecked(done: boolean, title: string): void {
    const items = this.todoItems.map(item => {
      if (item.title == title) {
        item.done = done;
      }
      return item;
    });
    this.todoItemsChange.emit(items);
  }
  onDeleted(title: string): void {
    const items = this.todoItems.map(item => {
      if (item.title == title) {
        item.deleted = true;
      }
      return item;
    });
    this.todoItemsChange.emit(items);
  }
}
