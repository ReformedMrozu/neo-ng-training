import { NgModule } from '@angular/core';
import { components, TodoBadgeComponent } from './components';
import { containers, TodoComponent } from './containers';
import { CommonModule } from '@angular/common';
import { services } from './services';
import { pipes } from './pipes';
import { MarkDoneDirective } from './directives/mark-done.directive';

@NgModule({
  declarations: [
    ...components,
    ...containers,
    ...pipes,
    MarkDoneDirective
  ],
  imports: [
    CommonModule,
  ],
  providers: [
    ...services,
  ],
  exports: [
    TodoComponent,
    TodoBadgeComponent,
  ]
})
export class TodoModule {

}
