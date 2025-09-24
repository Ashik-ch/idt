import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-subscription',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './subscription.html',
  styleUrls: ['./subscription.css']
})
export class Subscription {
  email: string = '';
  phone: string = '';

  @ViewChild('sectionRef', { static: true }) sectionRef!: ElementRef<any>;

  private intersectionObserver?: IntersectionObserver;

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      // Guard for GSAP existence when CDN not yet loaded
      const hasGsap = (window as any).gsap && (window as any).gsap.to;
      // Use IntersectionObserver to trigger animation on enter
      this.intersectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (hasGsap) {
              const gsap = (window as any).gsap;
              gsap.fromTo(
                entry.target,
                { autoAlpha: 0, y: 40 },
                { duration: 0.9, autoAlpha: 1, y: 0, ease: 'power3.out' }
              );
            } else {
              // Fallback: simple CSS reveal
              (entry.target as HTMLElement).style.opacity = '1';
              (entry.target as HTMLElement).style.transform = 'translateY(0)';
            }
            this.intersectionObserver?.unobserve(entry.target);
          }
        });
      }, { threshold: 0.25 });
    }
  }

  ngAfterViewInit(): void {
    if (this.sectionRef && this.intersectionObserver) {
      this.sectionRef.nativeElement.style.opacity = '0';
      this.sectionRef.nativeElement.style.transform = 'translateY(24px)';
      this.intersectionObserver.observe(this.sectionRef.nativeElement);
    }
  }

  ngOnDestroy(): void {
    this.intersectionObserver?.disconnect();
  }

  onSubmit(): void {
    // placeholder submission handler
    // In real app, call a service here
    console.log('Subscribe:', { email: this.email, phone: this.phone });
  }
}


 
