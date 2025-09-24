import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InboundView } from './inbound-view';

describe('InboundView', () => {
  let component: InboundView;
  let fixture: ComponentFixture<InboundView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InboundView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InboundView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
