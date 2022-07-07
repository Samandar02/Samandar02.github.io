import { Component, OnInit } from '@angular/core';
import { Animations } from '../animations/animations';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {

  constructor() { }
  name:string = "";
  ngOnInit(): void {
  }
  sendEmail(e: Event,nameVal: HTMLInputElement) {
    //https://dashboard.emailjs.com/admin/settings/profile
    //email.js
    e.preventDefault();
    if(nameVal.value)
      emailjs
        .sendForm(
          'service_x2fyqdr',
          'template_jmymgdm',
          e.target as HTMLFormElement,
          'OTZ7LndlPExRYxV2w'
        )
        .then(
          (result: EmailJSResponseStatus) => {
            console.log(result.text);
            alert("xabar jo'natildi")
          },
          (error) => {
            console.log(error.text);
          }
        );
  }

}
