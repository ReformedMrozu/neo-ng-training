import { Injectable } from '@angular/core';
import { PassengerDetails } from '../types';

// export interface PassengerDetails {
//     name: string;
//     content?: string;
//     age: number;
//     boarded: boolean;
//     doneDate?: Date;
// }

@Injectable()
export class PassengersService {
    private passengerList: PassengerDetails[] = [
        { name: 'John', age: 17, boarded: false, deleted: false },
        { name: 'Tom', age: 23, boarded: false, deleted: false }
    ];

    getPassengers(): PassengerDetails[] {
        return this.passengerList;
    }

    savePassengers(passengers: PassengerDetails[]): void {
        this.passengerList = passengers;
        console.log('saving todo list ', passengers);
    }
}
