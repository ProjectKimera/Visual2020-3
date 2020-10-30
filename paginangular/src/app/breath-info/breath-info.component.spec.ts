import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreathInfoComponent } from './breath-info.component';

describe('BreathInfoComponent', () => {
  let component: BreathInfoComponent;
  let fixture: ComponentFixture<BreathInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreathInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreathInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
