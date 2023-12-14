import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvinceImportInsideComponent } from './province-import-inside.component';

describe('ProvinceImportInsideComponent', () => {
  let component: ProvinceImportInsideComponent;
  let fixture: ComponentFixture<ProvinceImportInsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvinceImportInsideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProvinceImportInsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
