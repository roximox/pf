import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustumLinkCheckComponent } from './custum-link-check.component';

describe('CustumLinkCheckComponent', () => {
  let component: CustumLinkCheckComponent;
  let fixture: ComponentFixture<CustumLinkCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustumLinkCheckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustumLinkCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
