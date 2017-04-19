import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuscleListComponent } from './muscle-list.component';

describe('MuscleListComponent', () => {
  let component: MuscleListComponent;
  let fixture: ComponentFixture<MuscleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuscleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuscleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
