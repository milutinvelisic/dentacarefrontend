import { Component, OnInit } from '@angular/core';
import { Doctors } from '../models/doctors.model';
import { DoctorsService } from '../doctors.service';

@Component({
  selector: 'app-doctors-list',
  templateUrl: './doctors-list.component.html',
  styleUrls: ['./doctors-list.component.css']
})
export class DoctorsListComponent implements OnInit {

  doctorsData: Doctors[];

  constructor(doctors: DoctorsService) {
    doctors.getDoctorsData().subscribe(data => this.doctorsData = data);
  }

  ngOnInit(): void {
  }

}
