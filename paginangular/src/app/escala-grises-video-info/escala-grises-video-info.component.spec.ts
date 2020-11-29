import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscalaGrisesVideoInfoComponent } from './escala-grises-video-info.component';

describe('EscalaGrisesVideoInfoComponent', () => {
  let component: EscalaGrisesVideoInfoComponent;
  let fixture: ComponentFixture<EscalaGrisesVideoInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscalaGrisesVideoInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EscalaGrisesVideoInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
