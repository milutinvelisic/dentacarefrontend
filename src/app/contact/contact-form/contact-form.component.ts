import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  constructor() { }

  userData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };
  onSubmit(form: NgForm){
    if (form.valid){
      this.userData.name = form.value.name;
      this.userData.email = form.value.email;
      this.userData.subject = form.value.subject;
      this.userData.message = form.value.message;
      console.log(this.userData);
      alert('I wrote the data in the console');
    }
    else{
      alert('Please fill the form!');
    }
  }

  ngOnInit(): void {
  }

}
