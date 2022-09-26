import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector: '[appBasicHighlight]',
})
export class BasicHighlightDirective implements OnInit {
    constructor(private elementRef: ElementRef) {}
    ngOnInit(): void {
        this.elementRef.nativeElement.style.backgroundColor = 'black';
        this.elementRef.nativeElement.style.color = 'green';
        this.elementRef.nativeElement.classList.add('text-center');
    }
}
