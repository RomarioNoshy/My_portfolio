import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup = new FormGroup({

    'first_name': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    'last_name': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    'email': new FormControl(null, [Validators.required, Validators.email]),
    'text_massage': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(200)]),
  })

  submitForm() {
    console.log(this.contactForm);
    this.contactForm.reset();
  }

  whatsapp: string = "https://wa.me/201550448966";
  gmail: string = "mailto:romarionoshy@gmail.com";
  facebook: string = "https://www.facebook.com/romario.noshy";
  linkeDin: string = "https://www.linkedin.com/in/romario-noshy-b2a010142/";
  gitHup: string = "https://github.com/RomarioNoshy";
  constructor() { }

  ngOnInit(): void {

  }

}




