import { Component, OnInit } from '@angular/core';
import { TestimonyService } from '../testimony.service';
import { Testimony } from '../models/testimony.model';
import { Doctors } from '../models/doctors.model';
import { DoctorsService } from '../doctors.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  testimonyData: Testimony[];
  doctorsData: Doctors[];

  constructor(dependency: TestimonyService, dep: DoctorsService) {
    dependency.getNavData().subscribe(data => this.testimonyData = data)
    dep.getNavData().subscribe(ddata => this.doctorsData = ddata)
  }

  ngOnInit(): void {
  }

}
