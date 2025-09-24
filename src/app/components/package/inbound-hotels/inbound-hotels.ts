import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inbound-hotels',
  imports: [CommonModule, FormsModule],
  templateUrl: './inbound-hotels.html',
  styleUrl: './inbound-hotels.css'
})
export class InboundHotels {
  @Input() hotels: any
  @Input() transport: any

}
