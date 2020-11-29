import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdgevideoComponent } from './edgevideo.component';

describe('EdgevideoComponent', () => {
  let component: EdgevideoComponent;
  let fixture: ComponentFixture<EdgevideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdgevideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdgevideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
