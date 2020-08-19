import { Navigation } from './../../shared/navigation.service';
import { Component, OnInit } from '@angular/core';
import { Nav } from '../models/nav.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  navData: Nav[];

  constructor(dependency: Navigation) {
    dependency.getNavData().subscribe(data => this.navData = data)
  }

  ngOnInit(): void {
  }

}
