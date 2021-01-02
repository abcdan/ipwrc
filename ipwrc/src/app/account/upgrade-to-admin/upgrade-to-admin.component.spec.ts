import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpgradeToAdminComponent } from './upgrade-to-admin.component';

describe('UpgradeToAdminComponent', () => {
  let component: UpgradeToAdminComponent;
  let fixture: ComponentFixture<UpgradeToAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpgradeToAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpgradeToAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
