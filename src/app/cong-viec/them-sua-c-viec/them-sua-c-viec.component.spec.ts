import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemSuaCViecComponent } from './them-sua-c-viec.component';

describe('ThemSuaCViecComponent', () => {
  let component: ThemSuaCViecComponent;
  let fixture: ComponentFixture<ThemSuaCViecComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThemSuaCViecComponent]
    });
    fixture = TestBed.createComponent(ThemSuaCViecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
