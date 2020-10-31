import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformeT2Component } from './informe-t2.component';

describe('InformeT2Component', () => {
  let component: InformeT2Component;
  let fixture: ComponentFixture<InformeT2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformeT2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformeT2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
