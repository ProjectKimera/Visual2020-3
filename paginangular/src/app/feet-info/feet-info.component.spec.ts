import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeetInfoComponent } from './feet-info.component';

describe('FeetInfoComponent', () => {
  let component: FeetInfoComponent;
  let fixture: ComponentFixture<FeetInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeetInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeetInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
