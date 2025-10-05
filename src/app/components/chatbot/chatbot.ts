import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { chatFlow } from '../../data/chatbot';

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chatbot.html',
  styleUrls: ['./chatbot.css'],
})
export class Chatbot {
  isOpen = false;
  currentStep = chatFlow[0];

  openChat() {
    this.isOpen = !this.isOpen;
  }

  selectOption(nextId: string) {
    const nextStep = chatFlow.find((s) => s.id === nextId);
    if (nextStep) {
      this.currentStep = nextStep;
    }
  }
}
