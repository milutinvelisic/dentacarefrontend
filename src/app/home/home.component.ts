import { Component, OnInit } from '@angular/core';
import { TestimonyService } from '../testimony.service';
import { Testimony } from '../models/testimony.model';
import { Doctors } from '../models/doctors.model';
import { DoctorsService } from '../doctors.service';
import { Prices } from '../models/prices.model';
import { PricesService } from '../prices.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  testimonyData: Testimony[];
  doctorsData: Doctors[];
  pricesData: Prices[];

  constructor(dependency: TestimonyService, dep: DoctorsService, prices: PricesService) {
    dependency.getNavData().subscribe(data => this.testimonyData = data)
    dep.getNavData().subscribe(ddata => this.doctorsData = ddata)
    prices.getNavData().subscribe(pdata => this.pricesData = pdata)
  }

  ngOnInit(): void {
  }

}
