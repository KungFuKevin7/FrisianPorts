import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvinceDashboardPageComponent } from './province-dashboard-page.component';

describe('ProvinceDashboardPageComponent', () => {
  let component: ProvinceDashboardPageComponent;
  let fixture: ComponentFixture<ProvinceDashboardPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvinceDashboardPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProvinceDashboardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
