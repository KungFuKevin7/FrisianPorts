import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportOverviewComponent } from './transport-overview.component';

describe('TransportOverviewComponent', () => {
  let component: TransportOverviewComponent;
  let fixture: ComponentFixture<TransportOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransportOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransportOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
