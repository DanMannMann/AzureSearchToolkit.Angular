import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortLabelComponent } from './sort-label.component';

describe('SortLabelComponent', () => {
  let component: SortLabelComponent;
  let fixture: ComponentFixture<SortLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortLabelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
