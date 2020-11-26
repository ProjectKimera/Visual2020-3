import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttenuationInfoComponent } from './attenuation-info.component';

describe('AttenuationInfoComponent', () => {
  let component: AttenuationInfoComponent;
  let fixture: ComponentFixture<AttenuationInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttenuationInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttenuationInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
