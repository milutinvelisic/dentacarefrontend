import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsHeaderComponent } from './doctors-header.component';

describe('DoctorsHeaderComponent', () => {
  let component: DoctorsHeaderComponent;
  let fixture: ComponentFixture<DoctorsHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorsHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
