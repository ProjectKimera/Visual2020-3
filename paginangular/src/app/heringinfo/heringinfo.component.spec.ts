import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeringinfoComponent } from './heringinfo.component';

describe('HeringinfoComponent', () => {
  let component: HeringinfoComponent;
  let fixture: ComponentFixture<HeringinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeringinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeringinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
