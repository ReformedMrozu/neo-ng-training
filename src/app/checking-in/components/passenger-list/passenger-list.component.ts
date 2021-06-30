import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PassengersService } from '../../services';
import { PassengerDetails } from '../../types';

@Component({
  selector: 'app-passenger-list',
  templateUrl: './passenger-list.component.html',
  styleUrls: ['./passenger-list.component.scss'],
  providers: [PassengersService]
})
export class PassengerListComponent implements OnInit {
  @Input() passengerDetails: PassengerDetails[];
  @Output() passengerDetailsChange = new EventEmitter<PassengerDetails[]>();
  constructor() { }

  ngOnInit(): void {
  }

}
