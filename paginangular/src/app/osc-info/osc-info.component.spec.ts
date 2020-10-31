import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OscInfoComponent } from './osc-info.component';

describe('OscInfoComponent', () => {
  let component: OscInfoComponent;
  let fixture: ComponentFixture<OscInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OscInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OscInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
