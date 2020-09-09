import { Component, OnInit } from '@angular/core';
import { Doctors } from '../models/doctors.model';
import { DoctorsService } from '../doctors.service';
import { PricesService } from '../prices.service';
import { Prices } from '../models/prices.model';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {

  doctorsData: Doctors[];
  pricesData: Prices[];

  constructor(dep: DoctorsService, prices: PricesService) {
    dep.getNavData().subscribe(ddata => this.doctorsData = ddata)
    prices.getNavData().subscribe(data => this.pricesData = data)
  }

  ngOnInit(): void {
  }

}
