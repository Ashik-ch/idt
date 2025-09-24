import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { statesData } from '../../../data/inbound.data';
import { Package, travelPackages } from '../../../data/package.data';
import { InboundOverview } from '../../package/inbound-overview/inbound-overview';

@Component({
  selector: 'app-inbound-package',
  imports: [CommonModule, FormsModule,
    InboundOverview,
  ],
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


  packageData: Package | null = null;
  activeTab: string = 'overview';
  activeAccordion: string = '';

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const state = params['state'];
      this.loadStateData(state);
      this.loadPackageData(state);
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

  private loadPackageData(stateParam: string): void {
    if (stateParam) {
      this.packageData = travelPackages.find(pkg =>
        pkg.id.toLowerCase() === stateParam.toLowerCase()
      ) || null;

      if (!this.packageData) {
        this.router.navigate(['/inbound']);
      }
    }
  }

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }

  toggleAccordion(section: string): void {
    this.activeAccordion = this.activeAccordion === section ? '' : section;
  }

  scrollToPackages() {
    const packagesElement = document.getElementById('packages');
    if (packagesElement) {
      packagesElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

