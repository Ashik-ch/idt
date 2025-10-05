import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inbound-summary',
  imports: [CommonModule, FormsModule],
  templateUrl: './inbound-summary.html',
  styleUrl: './inbound-summary.css'
})
export class InboundSummary {
  @Input() details: any
  @Input() specialOffers: any
  @Input() exclusions: any
  @Input() inclusions: any
  @Input() sightseeing: any

}
