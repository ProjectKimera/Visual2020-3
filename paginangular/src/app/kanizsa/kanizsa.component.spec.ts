import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanizsaComponent } from './kanizsa.component';

describe('KanizsaComponent', () => {
  let component: KanizsaComponent;
  let fixture: ComponentFixture<KanizsaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KanizsaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KanizsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
