import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvinceDataViewComponent } from './province-data-view.component';

describe('ProvinceDataViewComponent', () => {
  let component: ProvinceDataViewComponent;
  let fixture: ComponentFixture<ProvinceDataViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvinceDataViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProvinceDataViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
