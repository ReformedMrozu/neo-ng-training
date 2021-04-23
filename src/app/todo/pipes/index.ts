import { ShortDatePipe } from './short-date.pipe';
import { TomorrowPipe } from './tomorrow.pipe';

export const pipes: any[] = [
  ShortDatePipe,
  TomorrowPipe
];
export * from './short-date.pipe';
export * from './tomorrow.pipe';
