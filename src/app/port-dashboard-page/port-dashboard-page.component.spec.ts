import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortDashboardPageComponent } from './port-dashboard-page.component';

describe('PortDashboardPageComponent', () => {
  let component: PortDashboardPageComponent;
  let fixture: ComponentFixture<PortDashboardPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortDashboardPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortDashboardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
