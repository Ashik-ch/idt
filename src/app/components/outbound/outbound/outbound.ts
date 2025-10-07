import { CommonModule } from '@angular/common';
import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { outBoundPackages } from '../../../data/outbound.data';
import { OutboundGlobe } from '../outbound-globe/outbound-globe';
import { QUOTES } from '../../../data/qoutes.data';
import { Qoutes } from '../../pages/qoutes/qoutes';

@Component({
  selector: 'app-outbound',
  imports: [
    CommonModule, FormsModule, RouterModule,
    OutboundGlobe, Qoutes
  ],
  templateUrl: './outbound.html',
  styleUrl: './outbound.css'
})
export class Outbound {
  qoutes = QUOTES[1];
  countries = outBoundPackages;
  constructor(private router: Router) { }

  @ViewChildren('countryCard') countryCards!: QueryList<ElementRef>;

  navigateToCountry(country: string) {
    this.router.navigate(['/outbound', country]);
  }


}
