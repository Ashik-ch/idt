import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-qoutes',
  imports: [],
  templateUrl: './qoutes.html',
  styleUrl: './qoutes.css'
})
export class Qoutes {
  @Input() quote :any
}
