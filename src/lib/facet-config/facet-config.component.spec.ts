import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacetConfigComponent } from './facet-config.component';

describe('FacetConfigComponent', () => {
  let component: FacetConfigComponent;
  let fixture: ComponentFixture<FacetConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacetConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacetConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
