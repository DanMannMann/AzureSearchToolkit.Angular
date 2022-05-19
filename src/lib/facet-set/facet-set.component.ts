import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FacetSet } from '../Model';

@Component({
  selector: 'search-toolkit-facet-set',
  templateUrl: './facet-set.component.html',
  styleUrls: ['./facet-set.component.css']
})
export class FacetSetComponent implements OnInit {
  @Input('facetSet') public facetSet!: FacetSet;
  @Output('facetSetChange') public facetSetChange: EventEmitter<FacetSet> = new EventEmitter<FacetSet>();
  expanded: boolean = true;
  showMore: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  get displayName(): string {
    return this.facetSet.displayName || this.facetSet.facetName;
  }

}
