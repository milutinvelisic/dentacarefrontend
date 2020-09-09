import { Component, OnInit } from '@angular/core';
import { Prices } from '../models/prices.model';
import { PricesService } from '../prices.service';
import { ServicesType } from '../models/servicestype.model';
import { ServicestypeService } from '../servicestype.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  pricesData: Prices[];
  servicesType: ServicesType[];

  constructor(dependency: PricesService, stype: ServicestypeService) {
    dependency.getNavData().subscribe(data => this.pricesData = data)
    stype.getNavData().subscribe(ddata => this.servicesType = ddata)
  }

  ngOnInit(): void {
  }

}
