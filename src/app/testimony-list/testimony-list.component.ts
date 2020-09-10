import { Component, OnInit } from '@angular/core';
import { Testimony } from '../models/testimony.model';
import { TestimonyService } from '../testimony.service';

@Component({
  selector: 'app-testimony-list',
  templateUrl: './testimony-list.component.html',
  styleUrls: ['./testimony-list.component.css']
})
export class TestimonyListComponent implements OnInit {


  testimonyData: Testimony[];

  constructor(testimony: TestimonyService) {
    testimony.getTestimonyData().subscribe(data => this.testimonyData = data);
  }

  ngOnInit(): void {
  }

}
