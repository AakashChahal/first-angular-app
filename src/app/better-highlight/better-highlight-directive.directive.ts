import {
    Directive,
    ElementRef,
    HostListener,
    OnInit,
    Renderer2,
} from '@angular/core';

@Directive({
    selector: '[appBetterHighlightDirective]',
})
export class BetterHighlightDirectiveDirective implements OnInit {
    constructor(private elRef: ElementRef, private renderer: Renderer2) {}

    ngOnInit(): void {
        this.renderer.setStyle(
            this.elRef.nativeElement,
            'background-color',
            'blue'
        );
        this.renderer.addClass(this.elRef.nativeElement, 'text-center');
    }

    @HostListener('mouseenter') mouseover(eventData: Event) {
        this.renderer.setStyle(this.elRef.nativeElement, 'color', 'yellow');
    }

    @HostListener('mouseleave') mouseleave(eventData: Event) {
        this.renderer.setStyle(this.elRef.nativeElement, 'color', 'black');
    }
}
