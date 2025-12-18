import { Directive, ElementRef, Input, OnInit, OnDestroy, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScrollAnimate]'
})
export class ScrollAnimateDirective implements OnInit, OnDestroy {
  @Input() animationType: 'fade-up' | 'fade-left' | 'fade-right' | 'fade-in' | 'zoom-in' | 'slide-up' = 'fade-up';
  @Input() animationDelay: number = 0;
  @Input() animationDuration: number = 600;
  @Input() animationThreshold: number = 0.1;

  private observer!: IntersectionObserver;
  private hasAnimated: boolean = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    // Add the hidden class initially
    this.renderer.addClass(this.el.nativeElement, 'scroll-animate');
    this.renderer.addClass(this.el.nativeElement, 'scroll-animate--hidden');
    
    // Set custom animation properties
    this.renderer.setStyle(this.el.nativeElement, '--animation-delay', `${this.animationDelay}ms`);
    this.renderer.setStyle(this.el.nativeElement, '--animation-duration', `${this.animationDuration}ms`);

    // Create the intersection observer
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !this.hasAnimated) {
            this.animate();
            this.hasAnimated = true;
          }
        });
      },
      {
        threshold: this.animationThreshold,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    this.observer.observe(this.el.nativeElement);
  }

  private animate(): void {
    this.renderer.removeClass(this.el.nativeElement, 'scroll-animate--hidden');
    this.renderer.addClass(this.el.nativeElement, `scroll-animate--${this.animationType}`);
    this.renderer.addClass(this.el.nativeElement, 'scroll-animate--visible');
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
