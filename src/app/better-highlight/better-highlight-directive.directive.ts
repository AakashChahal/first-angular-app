import {
    Directive,
    ElementRef,
    HostBinding,
    HostListener,
    OnInit,
    Renderer2,
} from '@angular/core';

@Directive({
    selector: '[appBetterHighlightDirective]',
})
export class BetterHighlightDirectiveDirective implements OnInit {
    @HostBinding('style.backgroundColor') backgroundColor: string;
    constructor(private elRef: ElementRef, private renderer: Renderer2) {}

    ngOnInit(): void {
        // this.renderer.setStyle(
        //     this.elRef.nativeElement,
        //     'background-color',
        //     'blue'
        // );
        this.backgroundColor = 'blue';
        this.renderer.addClass(this.elRef.nativeElement, 'text-center');
    }

    @HostListener('mouseenter') mouseover(eventData: Event) {
        this.renderer.setStyle(this.elRef.nativeElement, 'color', 'yellow');
        this.backgroundColor = 'red';
    }

    @HostListener('mouseleave') mouseleave(eventData: Event) {
        this.renderer.setStyle(this.elRef.nativeElement, 'color', 'black');
        this.backgroundColor = 'blue';
    }
}
