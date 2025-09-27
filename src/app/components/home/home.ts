import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Service } from '../pages/service/service';
import { Subscription } from '../pages/subscription/subscription';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule, RouterModule,
    Service, Subscription, 
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {

  isSubscriptionOpen = false;

  ngOnInit() {
    const hasVisited = localStorage.getItem('hasVisited');
    if (!hasVisited) {
      this.isSubscriptionOpen = true;
      localStorage.setItem('hasVisited', 'true');
    }
  }
}
