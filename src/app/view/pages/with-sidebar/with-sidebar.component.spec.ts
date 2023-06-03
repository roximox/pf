import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithSidebarComponent } from './with-sidebar.component';

describe('WithSidebarComponent', () => {
  let component: WithSidebarComponent;
  let fixture: ComponentFixture<WithSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WithSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
