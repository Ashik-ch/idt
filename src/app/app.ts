import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/pages/header/header';
import { Footer } from './components/pages/footer/footer';
import { Chatbot } from './components/chatbot/chatbot';
import Kursor from 'kursor';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Chatbot],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  ngOnInit() {
    new Kursor({
      type: 1, // choose from 1–5 (different styles)
      removeDefaultCursor: true,
      color: '#000'
    });
  }
}
