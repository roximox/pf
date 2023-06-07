import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CercleChartLinksComponent } from './cercle-chart-links.component';

describe('CercleChartLinksComponent', () => {
  let component: CercleChartLinksComponent;
  let fixture: ComponentFixture<CercleChartLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CercleChartLinksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CercleChartLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
