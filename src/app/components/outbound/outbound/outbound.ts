import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OutboundMap } from '../outbound-map/outbound-map';

@Component({
  selector: 'app-outbound',
  imports: [
    CommonModule, FormsModule,
    OutboundMap
  ],
  templateUrl: './outbound.html',
  styleUrl: './outbound.css'
})
export class Outbound {

}
