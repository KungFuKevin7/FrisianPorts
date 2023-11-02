import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAddedItemsPageComponent } from './my-added-items-page.component';

describe('MyAddedItemsPageComponent', () => {
  let component: MyAddedItemsPageComponent;
  let fixture: ComponentFixture<MyAddedItemsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyAddedItemsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyAddedItemsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
