import { PassengerSummaryComponent } from "./passenger-summary/passenger-summary.component";
import { PassengerListComponent } from "./passenger-list/passenger-list.component";
import { PassengerDetailsComponent } from "./passenger-details/passenger-details.component";

export const components: any[] = [
    PassengerDetailsComponent,
    PassengerListComponent,
    PassengerSummaryComponent
]

export * from './passenger-details/passenger-details.component';
export * from './passenger-list/passenger-list.component';
export * from './passenger-summary/passenger-summary.component';