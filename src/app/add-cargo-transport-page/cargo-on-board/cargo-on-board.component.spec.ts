import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargoOnBoardComponent } from './cargo-on-board.component';

describe('CargoOnBoardComponent', () => {
  let component: CargoOnBoardComponent;
  let fixture: ComponentFixture<CargoOnBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargoOnBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CargoOnBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
