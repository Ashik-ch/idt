import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inbound-itinerary',
  imports: [
    FormsModule, CommonModule
  ],
  templateUrl: './inbound-itinerary.html',
  styleUrl: './inbound-itinerary.css'
})
export class InboundItinerary {

  @Input() packageData: any 

  timelineData: any[] = [
    {
      title: 'Day 01 – Arrival at Cochin',
      content: [
        'Pickup from airport',
        'Check-in at hotel',
        'Evening city sightseeing including Fort Kochi and Marine Drive'
      ]
    },
    {
      title: 'Day 02 – Munnar Sightseeing',
      content: [
        'Drive to Munnar via lush tea gardens',
        'Visit Rose Garden & Tea Museum',
        'Evening leisure at Munnar hill station'
      ]
    },
    {
      title: 'Day 03 – Thekkady Wildlife Safari',
      content: [
        'Proceed to Thekkady',
        'Periyar Wildlife Sanctuary jeep safari',
        'Spice plantation tour & optional boat ride'
      ]
    },
    {
      title: 'Day 04 – Houseboat Cruise',
      content: [
        'Drive to Alleppey',
        'Board traditional houseboat',
        'Full-day backwater cruise with overnight stay on board'
      ]
    },
    {
      title: 'Day 05 – Kumarakom Visit',
      content: [
        'Morning drive to Kumarakom',
        'Explore Kumarakom Bird Sanctuary',
        'Relax by the backwaters'
      ]
    },
    {
      title: 'Day 06 – Alleppey Backwaters',
      content: [
        'Village walk through Alleppey canals',
        'Enjoy canoe ride',
        'Cultural activities and sunset view'
      ]
    },
    {
      title: 'Day 07 – Departure from Cochin',
      content: [
        'Breakfast at hotel',
        'Checkout and transfer to Cochin airport',
        'Tour ends with sweet memories'
      ]
    }
  ];
}
