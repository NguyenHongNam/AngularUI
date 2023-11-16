import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsCViecComponent } from './ds-c-viec.component';

describe('DsCViecComponent', () => {
  let component: DsCViecComponent;
  let fixture: ComponentFixture<DsCViecComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DsCViecComponent]
    });
    fixture = TestBed.createComponent(DsCViecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
