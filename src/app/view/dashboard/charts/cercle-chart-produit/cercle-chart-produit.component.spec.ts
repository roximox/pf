import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CercleChartProduitComponent } from './cercle-chart-produit.component';

describe('CercleChartProduitComponent', () => {
  let component: CercleChartProduitComponent;
  let fixture: ComponentFixture<CercleChartProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CercleChartProduitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CercleChartProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
