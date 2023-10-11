import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargoPiechartComponent } from './cargo-piechart.component';

describe('CargoPiechartComponent', () => {
  let component: CargoPiechartComponent;
  let fixture: ComponentFixture<CargoPiechartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargoPiechartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CargoPiechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
