import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Service } from '../pages/service/service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule, RouterModule,
    Service,
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
