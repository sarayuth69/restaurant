import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CutomermenuComponent } from './cutomermenu.component';

describe('CutomermenuComponent', () => {
  let component: CutomermenuComponent;
  let fixture: ComponentFixture<CutomermenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CutomermenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CutomermenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
