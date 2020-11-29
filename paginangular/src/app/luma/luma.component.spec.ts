import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LumaComponent } from './luma.component';

describe('LumaComponent', () => {
  let component: LumaComponent;
  let fixture: ComponentFixture<LumaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LumaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LumaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
