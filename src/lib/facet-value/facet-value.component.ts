import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FacetSet, FacetValue, getDisplayString } from '../Model';

@Component({
  selector: 'search-toolkit-facet-value',
  templateUrl: './facet-value.component.html',
  styleUrls: ['./facet-value.component.css']
})
export class FacetValueComponent implements OnInit {
  @Input('facetSet') public facetSet!: FacetSet;
  @Input('facetValue') public facetValue!: FacetValue;
  @Output('facetValueChange') public facetValueChange: EventEmitter<FacetValue> = new EventEmitter<FacetValue>();
  constructor() { }

  ngOnInit(): void {
  }

  get hasSecondValue(): boolean {
    return this.facetSet.valueType == "DateTime"
              ? this.facetSet.facetRangeType == "Range"
              : this.facetSet.facetRangeType != "Value";
  }

  getDisplayString = (val: any) => getDisplayString(this.facetSet, val);
}
