import { Component, OnInit } from '@angular/core';
import { Doctors } from '../models/doctors.model';
import { DoctorsService } from '../doctors.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {

  doctorsData: Doctors[];

  constructor(dep: DoctorsService) {
    dep.getNavData().subscribe(ddata => this.doctorsData = ddata)
  }

  ngOnInit(): void {
  }

}
