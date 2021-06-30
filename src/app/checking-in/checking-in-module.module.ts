import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { components, PassengerDetailsComponent, PassengerListComponent, PassengerSummaryComponent } from './components';
import { PassengersComponent } from './containers/passengers/passengers.component';

@NgModule({
  declarations: [
    ...components,
    PassengersComponent
  ],
  imports: [
    CommonModule
  ], 
  exports: [
    PassengerListComponent,
    PassengerSummaryComponent,
    PassengerDetailsComponent
  ]
})
export class CheckingInModule { }
