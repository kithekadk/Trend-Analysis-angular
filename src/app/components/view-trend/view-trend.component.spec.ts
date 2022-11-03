import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTrendComponent } from './view-trend.component';

describe('ViewTrendComponent', () => {
  let component: ViewTrendComponent;
  let fixture: ComponentFixture<ViewTrendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTrendComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewTrendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
