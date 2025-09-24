import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-inbound-pricing',
  imports: [],
  templateUrl: './inbound-pricing.html',
  styleUrl: './inbound-pricing.css'
})
export class InboundPricing {
  @Input() pricing: any
}
