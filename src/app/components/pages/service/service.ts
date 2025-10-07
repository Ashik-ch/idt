import { Component } from '@angular/core';
import { features, Services, testimonialList } from '../../../data/data';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [CommonModule, FormsModule,

  ],
  templateUrl: './service.html',
  styleUrls: ['./service.css']
})
export class Service {
  features = features;
  services = Services;
  testimonials = testimonialList;
  selectedService: any = null;

  openModal(service: any) {
    this.selectedService = service;
  }

  closeModal() {
    this.selectedService = null;
  }
}
