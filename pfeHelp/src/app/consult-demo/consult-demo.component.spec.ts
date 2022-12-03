import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultDemoComponent } from './consult-demo.component';

describe('ConsultDemoComponent', () => {
  let component: ConsultDemoComponent;
  let fixture: ComponentFixture<ConsultDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
