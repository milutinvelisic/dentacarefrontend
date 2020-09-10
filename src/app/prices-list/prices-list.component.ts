import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Prices } from '../models/prices.model';
import { PricesService } from '../prices.service';

@Component({
  selector: 'app-prices-list',
  templateUrl: './prices-list.component.html',
  styleUrls: ['./prices-list.component.css']
})
export class PricesListComponent implements OnInit {

  pricesData: Prices[];

  constructor(prices: PricesService) {
    prices.getPriceData().subscribe(pdata => this.pricesData = pdata);
  }

  ngOnInit(): void {
  }

}
