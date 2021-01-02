import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetailItemComponent } from './order-detail-item.component';

describe('OrderDetailItemComponent', () => {
  let component: OrderDetailItemComponent;
  let fixture: ComponentFixture<OrderDetailItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderDetailItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDetailItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
