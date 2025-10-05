import { Component } from '@angular/core';
import { InboundMap } from './inbound-map/inbound-map';
import { inboundPackages } from '../../data/package.data';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inbound',
  imports: [InboundMap,
    CommonModule, FormsModule,
  ],
  templateUrl: './inbound.html',
  styleUrl: './inbound.css'
})
export class Inbound {
  inboundPackages = inboundPackages;
  constructor(private router: Router) { }

  navigateToState(state: string) {
    this.router.navigate(['/inbound', state]);
  }

  openPackage(packageId: string) {
    console.log('Selected package:', packageId);
  }
}

