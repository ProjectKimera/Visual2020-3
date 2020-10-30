import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeringComponent } from './hering.component';

describe('HeringComponent', () => {
  let component: HeringComponent;
  let fixture: ComponentFixture<HeringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
