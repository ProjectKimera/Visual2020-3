import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanisaInfoComponent } from './kanisa-info.component';

describe('KanisaInfoComponent', () => {
  let component: KanisaInfoComponent;
  let fixture: ComponentFixture<KanisaInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KanisaInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KanisaInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
