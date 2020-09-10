import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home-form',
  templateUrl: './home-form.component.html',
  styleUrls: ['./home-form.component.css']
})
export class HomeFormComponent implements OnInit {

  constructor() { }

  userData = {
    services:"",
    name: "",
    email: "",
    date: "",
    time: "",
    phone: ""
  }
  onSubmit(form: NgForm){
    if(form.valid){
      this.userData.services = form.value.services;
      this.userData.name = form.value.name;
      this.userData.email = form.value.email;
      this.userData.date = form.value.date;
      this.userData.time = form.value.time;
      this.userData.phone = form.value.phone;
      console.log(this.userData)
      alert('I wrote the data in the console')
    }
    else{
      alert("Please fill the form!");
    }
  }

  ngOnInit(): void {
  }

}
