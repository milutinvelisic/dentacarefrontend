import { Component, OnInit } from '@angular/core';
import { ServicesType } from '../models/servicestype.model';
import { ServicestypeService } from '../servicestype.service';

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.css']
})
export class ServicesListComponent implements OnInit {

  servicesType: ServicesType[];

  constructor(stype: ServicestypeService) {
    stype.getServiceType().subscribe(ddata => this.servicesType = ddata);
   }

  ngOnInit(): void {
  }

}
