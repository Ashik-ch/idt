import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxTypewriterComponent } from '@omnedia/ngx-typewriter';

@Component({
  selector: 'app-demo',
  imports: [RouterModule, NgxTypewriterComponent],
  templateUrl: './demo.html',
  styleUrl: './demo.css'
})
export class Demo {

}
