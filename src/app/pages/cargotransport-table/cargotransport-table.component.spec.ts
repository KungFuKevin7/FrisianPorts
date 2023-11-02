import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargotransportTableComponent } from './cargotransport-table.component';

describe('CargotransportTableComponent', () => {
  let component: CargotransportTableComponent;
  let fixture: ComponentFixture<CargotransportTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargotransportTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CargotransportTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
