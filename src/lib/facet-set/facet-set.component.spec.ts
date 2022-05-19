import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacetSetComponent } from './facet-set.component';

describe('FacetSetComponent', () => {
  let component: FacetSetComponent;
  let fixture: ComponentFixture<FacetSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacetSetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacetSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
