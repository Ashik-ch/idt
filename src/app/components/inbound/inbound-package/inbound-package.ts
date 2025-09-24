import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { statesData } from '../../../data/inbound.data';

@Component({
  selector: 'app-inbound-package',
  imports: [CommonModule, FormsModule],
  templateUrl: './inbound-package.html',
  styleUrl: './inbound-package.css'
})
export class InboundPackage {

  stateName = '';
  stateDescription = '';
  stateHighlights: any[] = [];
  availablePackages: any[] = [];
  popularDestinations: any[] = [];
  bestTimeToVisit: any[] = [];
  stateData: any;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const state = params['state'];
      this.loadStateData(state);
    });
  }


  loadStateData(state: string) {
    this.stateData = statesData
    const data = this.stateData[state] || this.stateData['kerala'];
    this.stateName = data.name;
    this.stateDescription = data.description;
    this.stateHighlights = data.highlights;
    this.availablePackages = data.packages;
    this.popularDestinations = data.destinations;
    this.bestTimeToVisit = data.bestTime;
  }

  scrollToPackages() {
    const packagesElement = document.getElementById('packages');
    if (packagesElement) {
      packagesElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

