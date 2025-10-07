import { Component } from '@angular/core';
import { QUOTES } from '../../../data/qoutes.data';
import { Qoutes } from '../qoutes/qoutes';

@Component({
  selector: 'app-contact',
  imports: [Qoutes],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  qoutes = QUOTES[2];

}
