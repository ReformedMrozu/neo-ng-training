import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PassengersService } from '../../services';
import { PassengerDetails } from '../../types';

@Component({
  selector: 'app-passenger-list',
  templateUrl: './passenger-list.component.html',
  styleUrls: ['./passenger-list.component.scss'],
  providers: [PassengersService]
})
export class PassengerListComponent {
  @Input() passengerDetails: PassengerDetails[];
  @Output() passengerDetailsChange = new EventEmitter<PassengerDetails[]>();

  onChecked(boarded: boolean, name: string): void {
    const details = this.passengerDetails.map(item => {
      if (item.name == name) {
        item.boarded = boarded;
      }
      return item;
    });
    this.passengerDetailsChange.emit(details);
  }

  onDeleted(name: string): void {
    console.log(name + "delted")
    const items = this.passengerDetails.map(item => {
      if (item.name == name) {
        item.deleted = true;
      }
      return item;
    })
    this.passengerDetailsChange.emit(items);
  }
}
