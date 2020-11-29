import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscvComponent } from './escv.component';

describe('EscvComponent', () => {
  let component: EscvComponent;
  let fixture: ComponentFixture<EscvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EscvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
