import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { PassengerDetails } from '../../types';

@Component({
  selector: 'app-passenger-details',
  templateUrl: './passenger-details.component.html',
  styleUrls: ['./passenger-details.component.scss']
})
export class PassengerDetailsComponent{
  @Input() passenger: PassengerDetails;
  @Output() checked = new EventEmitter<boolean>();
  @Output() deleted = new EventEmitter<void>();

  onChange(event): void {
    this.checked.emit(event.target.checked);
  }

  onDelete(): void {
    this.checked.emit();
  }

  hasChanged(): void {
    console.log('item done value has changed');
  }
}
