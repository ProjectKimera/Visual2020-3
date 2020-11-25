import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbientInfoComponent } from './ambient-info.component';

describe('AmbientInfoComponent', () => {
  let component: AmbientInfoComponent;
  let fixture: ComponentFixture<AmbientInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmbientInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmbientInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
