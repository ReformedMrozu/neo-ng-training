import { Component, OnDestroy, OnInit } from '@angular/core';
import { TodoService } from '../../services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-todo-badge',
  template: `
    <div *ngIf="!!all">wykonanych zadań {{ done }} z {{ all }} <small>na jutro {{ today | tomorrow | shortDate  }}</small></div>
    <button type="button" (click)="closeStream()">zamknij strumień</button>
  `,
})
export class TodoBadgeComponent implements OnInit, OnDestroy {
  done: number;
  all: number;
  today: Date;
  subscription = new Subscription();
  constructor(private todoService: TodoService) {
  }

  ngOnInit(): void {
    this.subscription.add(
      this.todoService.getDoneCount().subscribe(
        count => this.done = count,
        error => console.log(error),
        () => console.log('strumień zamknięty')
      )
    );
    this.subscription.add(
      this.todoService.getAllCount().subscribe(
        count => this.all = count,
        error => console.log(error),
        () => console.log('strumień zamknięty')
      )
    );
    this.today = new Date();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  closeStream(): void { }
}
