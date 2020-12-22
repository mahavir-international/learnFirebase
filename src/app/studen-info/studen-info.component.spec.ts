import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudenInfoComponent } from './studen-info.component';

describe('StudenInfoComponent', () => {
  let component: StudenInfoComponent;
  let fixture: ComponentFixture<StudenInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudenInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudenInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
