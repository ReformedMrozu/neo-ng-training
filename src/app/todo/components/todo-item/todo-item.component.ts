import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoItem } from '../../types';

@Component({
  selector: 'app-todo-item',
  template: `
    <li *ngIf="!item.deleted" appMarkSelected [done]="item.done" (markingHasChanged)="hasChanged()"> <input type="checkbox" (change)="onChange($event)"> <label>{{ item.title }}</label> <button type="button" (click)="onDelete()">usuń</button></li>
  `
})
export class TodoItemComponent {
  @Input() item: TodoItem;
  @Output() checked = new EventEmitter<boolean>();
  @Output() deleted = new EventEmitter<void>();

  onChange(event): void {
    this.checked.emit(event.target.checked);
  }

  onDelete(): void {
    this.deleted.emit();
  }

  hasChanged(): void {
    console.log('item done value has changed');
  }
}
