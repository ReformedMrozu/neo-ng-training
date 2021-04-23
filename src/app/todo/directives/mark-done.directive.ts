import { Directive, ElementRef, EventEmitter, Input, Output } from '@angular/core';

@Directive({
  selector: '[appMarkSelected]'
})
export class MarkDoneDirective {
  @Input() set done(value: boolean) {
    if (!!value) {
      this.element.nativeElement.style.backgroundColor = 'green';
    } else {
      this.element.nativeElement.style.backgroundColor = 'transparent';
    }
    this.markingHasChanged.emit();
  }

  @Output() markingHasChanged = new EventEmitter<void>();


  constructor(private element: ElementRef) {
    console.log(element.nativeElement);
  }
}
