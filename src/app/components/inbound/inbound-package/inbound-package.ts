import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { statesData } from '../../../data/inbound.data';
import { Package, travelPackages } from '../../../data/package.data'; 
import { NgxShineBorderComponent } from '@omnedia/ngx-shine-border';
import { InboundItinerary } from '../../package/inbound-itinerary/inbound-itinerary';
import { InboundPricing } from '../../package/inbound-pricing/inbound-pricing';
import { InboundSummary } from '../../package/inbound-summary/inbound-summary';
import { InboundHotels } from '../../package/inbound-hotels/inbound-hotels';
import * as AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-inbound-package',
  imports: [CommonModule, FormsModule,
    
    InboundItinerary,
    NgxShineBorderComponent,
    InboundPricing,
    InboundHotels,
    InboundSummary,
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
  openSection: string | null = 'overview'; // default open

  constructor(private route: ActivatedRoute, private router: Router) { }


  collapsibleSections = [
    { id: 'overview', title: 'Explore your daily programme', delay: '0' },
    // { id: 'itinerary', title: 'Itinerary', delay: '100' },
    { id: 'hotels', title: 'Components of this Package', delay: '100' },
    { id: 'details', title: 'Details & Policies', delay: '200' },
    { id: 'pricing', title: 'Pricing', delay: '300' },
  ];


  toggleSection(id: string) {
    this.openSection = this.openSection === id ? null : id;
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const state = params['state'];
      this.loadStateData(state);
      this.loadPackageData(state);
    });
    AOS.init({ duration: 700, once: true });
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

