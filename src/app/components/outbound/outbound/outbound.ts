import { CommonModule } from '@angular/common';
import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OutboundMap } from '../outbound-map/outbound-map';
import { Router, RouterModule } from '@angular/router';
import { outBoundPackages } from '../../../data/outbound.data';

@Component({
  selector: 'app-outbound',
  imports: [
    CommonModule, FormsModule, RouterModule,
    OutboundMap
  ],
  templateUrl: './outbound.html',
  styleUrl: './outbound.css'
})
export class Outbound {
  countries = outBoundPackages;
  constructor(private router: Router) { }

  @ViewChildren('countryCard') countryCards!: QueryList<ElementRef>;

  navigateToCountry(country: string) {
    this.router.navigate(['/outbound', country]);
  }


}
