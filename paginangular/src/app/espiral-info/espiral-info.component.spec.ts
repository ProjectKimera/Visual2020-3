import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspiralInfoComponent } from './espiral-info.component';

describe('EspiralInfoComponent', () => {
  let component: EspiralInfoComponent;
  let fixture: ComponentFixture<EspiralInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspiralInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EspiralInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
