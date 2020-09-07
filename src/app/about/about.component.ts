import { Component, OnInit } from '@angular/core';
import { Testimony } from '../models/testimony.model';
import { TestimonyService } from '../testimony.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  testimonyData: Testimony[];

  constructor(dependency: TestimonyService) {
    dependency.getNavData().subscribe(data => this.testimonyData = data)
  }

  ngOnInit(): void {
  }

}
