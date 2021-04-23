import { Injectable } from '@angular/core';
import { TodoItem } from '../types';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';

@Injectable()
export class TodoService {
  private subject = new BehaviorSubject<TodoItem[]>([
    { title: 'zadanie 1', content: 'Zadanie abc', done: false, deleted: false },
    { title: 'zadanie 2', done: false, deleted: false },
  ]);
  private todoList$ = this.subject.asObservable();

  getTodo(): Observable<TodoItem[]> {
    return this.todoList$;
  }

  saveTodo(todoItems: TodoItem[]): void {
    this.subject.next(todoItems);
    console.log('saving todo list ', todoItems);
  }

  getDoneCount(): Observable<number> {
    return this.todoList$.pipe(
      tap(list => { console.log('tap', list); }),
      map(list => {
        return list.filter(item => item.done).length;
      })
    );
  }
  getAllCount(): Observable<number> {
    return this.todoList$.pipe(
      tap(list => { console.log('tap', list); }),
      map(list => {
        return list.length;
      })
    );
  }
  getDoneToday(): Observable<TodoItem[]> {
    return this.todoList$.pipe(
      map(list => list.filter(item => item.doneDate === new Date())) // tylko poglądowo
    );
  }

  closeStream(): void {
    this.subject.complete();
  }
}
