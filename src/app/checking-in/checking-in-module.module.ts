import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { components, PassengerDetailsComponent, PassengerListComponent, PassengerSummaryComponent } from './components';
import { PassengersComponent } from './containers/passengers/passengers.component';
import { services } from './services';

@NgModule({
  declarations: [
    ...components,
    PassengersComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    ...services,
  ],
  exports: [
    PassengersComponent
  ]
})
export class CheckingInModule { }
