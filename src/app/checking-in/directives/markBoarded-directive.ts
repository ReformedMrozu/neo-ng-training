import { Directive, ElementRef, EventEmitter, Input, Output } from "@angular/core";

@Directive({
    selector: '[appMarkBoarded]'
})
export class MarkBoardedDirective {
    @Input() set done(value: boolean) {
        if (!!value) {
            this.element.nativeElement.style.backgroundColor = 'aqua';
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
