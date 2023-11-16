import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsDMucComponent } from './ds-d-muc.component';

describe('DsDMucComponent', () => {
  let component: DsDMucComponent;
  let fixture: ComponentFixture<DsDMucComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DsDMucComponent]
    });
    fixture = TestBed.createComponent(DsDMucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
