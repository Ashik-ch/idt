import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/pages/header/header';
import { Footer } from './components/pages/footer/footer';
import { Chatbot } from './components/chatbot/chatbot';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Chatbot],
  template: `
    <app-header></app-header>
    <main class="min-h-[70vh]">
      <router-outlet />
    </main>
    <app-footer></app-footer>
    <app-chatbot></app-chatbot>
  `,
})
export class App { }
