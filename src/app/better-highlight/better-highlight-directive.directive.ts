import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

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
        this.renderer.setStyle(this.elRef.nativeElement, 'color', 'yellow');
        this.renderer.addClass(this.elRef.nativeElement, 'text-center');
    }
}
