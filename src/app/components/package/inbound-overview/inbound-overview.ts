import { Component, Input } from '@angular/core';
import { Package, travelPackages } from '../../../data/package.data';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  
import { RoadMap } from '../../../demos/road-map/road-map';

@Component({
  selector: 'app-inbound-overview',
  imports: [CommonModule, FormsModule,
    RoadMap
  ],
  templateUrl: './inbound-overview.html',
  styleUrl: './inbound-overview.css'
})
export class InboundOverview {
  @Input() stateHighlights: any;

  ackageData: Package | null = null;
  stateParam: string = '';
  packageData: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.stateParam = params['state'];
      this.loadPackageData();
    });
  }


  private loadPackageData(): void {
    if (this.stateParam) {
      this.packageData = travelPackages.find(pkg =>
        pkg.id.toLowerCase() === this.stateParam.toLowerCase()
      ) || null;

      if (!this.packageData) {
        this.router.navigate(['/inbound']);
      }
    }
  }
}

