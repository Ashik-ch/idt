import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inbound-pricing',
  imports: [FormsModule, CommonModule,
  ],
  templateUrl: './inbound-pricing.html',
  styleUrl: './inbound-pricing.css'
})
export class InboundPricing {
  @Input() pricing: any
  @Input() transport: any

  formatPrice(price: string): string {
    return price.replace('₹', '₹ ');
  }

  getSeasonClass(season: string): string {
    return season.toLowerCase().includes('high') ? 'bg-red-50 border-red-200' : 'bg-blue-50 border-blue-200';
  }
}

