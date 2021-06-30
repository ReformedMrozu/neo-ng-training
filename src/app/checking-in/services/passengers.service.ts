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
        { name: 'John', age: 17, boarded: false },
        { name: 'Tom', age: 23, boarded: false },
        { name: 'Mariusz', age: 27, boarded: false },
        { name: 'Janusz', age: 37, boarded: false },
        { name: 'Silena Gomes', age: 47, boarded: false },
    ];

    getPassengers(): PassengerDetails[] {
        return this.passengerList;
    }
}
