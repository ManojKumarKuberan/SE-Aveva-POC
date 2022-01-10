import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustHomePageComponent } from './cust-home-page.component';

describe('CustHomePageComponent', () => {
  let component: CustHomePageComponent;
  let fixture: ComponentFixture<CustHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustHomePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
