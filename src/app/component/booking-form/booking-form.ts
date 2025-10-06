import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-booking-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './booking-form.html',
  styleUrls: ['./booking-form.css'],
})
export class BookingForm {
  showSuccessModal = false;
  formData = {
    name: '',
    number: '',
    adults: 1,
    children: 0,
    arrival: '',
    return: '',
    rooms: 1,
    extraBeds: 0,
    packageType: '',
    transportType: '',
  };

  submitForm(form: NgForm) {
    if (!this.formData.name || !this.formData.number || !this.formData.adults) {
      form.control.markAllAsTouched();
      alert('⚠️ Please fill all mandatory fields (Name, Contact, Adults)');
      return;
    }

    // WhatsApp message
    const message = `
🧳 *Tour Confirmation Request*  
-----------------------------------  
👤 *Name:* ${this.formData.name}  
📞 *Contact:* ${this.formData.number}  
👨‍👩‍👧‍👦 *Adults:* ${this.formData.adults}  
🧒 *Children:* ${this.formData.children || 0}  
📅 *Arrival:* ${this.formData.arrival || 'Not specified'}  
📅 *Return:* ${this.formData.return || 'Not specified'}  
🏨 *Rooms:* ${this.formData.rooms}  
🛏️ *Extra Beds:* ${this.formData.extraBeds}  
💎 *Package:* ${this.formData.packageType || 'Not selected'}  
🚗 *Transport:* ${this.formData.transportType || 'Not selected'}  
-----------------------------------  
Please confirm the booking without modifications.
    `;

    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = '917561084625';
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');

    // Send email
    const templateParams = { ...this.formData };

    emailjs
      .send('service_4tw7ktw', 'template_y6g8cri', templateParams, '_kYaHnjxPJr6gwFdT')
      .then(
        () => {
          this.showSuccessModal = true;
          form.resetForm();
        },
        (error) => {
          console.error('EmailJS Error:', error);
          alert('⚠️ Something went wrong. Please try again.');
        }
      );
  }

  closeModal() {
    this.showSuccessModal = false;
  }
}
