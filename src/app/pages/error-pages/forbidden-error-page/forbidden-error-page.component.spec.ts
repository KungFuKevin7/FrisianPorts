import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForbiddenErrorPageComponent } from './forbidden-error-page.component';

describe('ForbiddenErrorPageComponent', () => {
  let component: ForbiddenErrorPageComponent;
  let fixture: ComponentFixture<ForbiddenErrorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForbiddenErrorPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForbiddenErrorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
