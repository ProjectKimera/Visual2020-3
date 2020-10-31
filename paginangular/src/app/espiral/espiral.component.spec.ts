import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspiralComponent } from './espiral.component';

describe('EspiralComponent', () => {
  let component: EspiralComponent;
  let fixture: ComponentFixture<EspiralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspiralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EspiralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
