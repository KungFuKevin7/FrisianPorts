import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportPageComponent } from './transport-page.component';
import {ActivatedRoute} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";

describe('TransportPageComponent', () => {
  let component: TransportPageComponent;
  let fixture: ComponentFixture<TransportPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransportPageComponent ],
      imports: [RouterTestingModule],
      providers: [
        {
         provide : ActivatedRoute
        }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransportPageComponent);
    component = fixture.componentInstance;
    //fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
