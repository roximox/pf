import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomLinkChekerComponent } from './custom-link-cheker.component';

describe('CustomLinkChekerComponent', () => {
  let component: CustomLinkChekerComponent;
  let fixture: ComponentFixture<CustomLinkChekerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomLinkChekerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomLinkChekerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
