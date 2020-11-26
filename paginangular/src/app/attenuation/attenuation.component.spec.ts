import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttenuationComponent } from './attenuation.component';

describe('AttenuationComponent', () => {
  let component: AttenuationComponent;
  let fixture: ComponentFixture<AttenuationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttenuationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttenuationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
