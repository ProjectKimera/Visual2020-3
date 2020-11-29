import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscalaGInfoComponent } from './escala-ginfo.component';

describe('EscalaGInfoComponent', () => {
  let component: EscalaGInfoComponent;
  let fixture: ComponentFixture<EscalaGInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscalaGInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EscalaGInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
