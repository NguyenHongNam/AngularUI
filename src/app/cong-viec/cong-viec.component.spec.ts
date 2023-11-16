import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CongViecComponent } from './cong-viec.component';

describe('CongViecComponent', () => {
  let component: CongViecComponent;
  let fixture: ComponentFixture<CongViecComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CongViecComponent]
    });
    fixture = TestBed.createComponent(CongViecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
