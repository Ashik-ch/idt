import { Component } from '@angular/core';
import { features, Services } from '../../../data/data';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxFadeComponent } from '@omnedia/ngx-fade'; 

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [CommonModule, FormsModule,
    NgxFadeComponent 
  ],
  templateUrl: './service.html',
  styleUrls: ['./service.css']
})
export class Service {
  features = features;
  services = Services;
}
