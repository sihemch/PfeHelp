import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultPubComponent } from './consult-pub.component';

describe('ConsultPubComponent', () => {
  let component: ConsultPubComponent;
  let fixture: ComponentFixture<ConsultPubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultPubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultPubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
