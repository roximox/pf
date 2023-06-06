import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinksCardsComponent } from './links-cards.component';

describe('LinksCardsComponent', () => {
  let component: LinksCardsComponent;
  let fixture: ComponentFixture<LinksCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinksCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinksCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
