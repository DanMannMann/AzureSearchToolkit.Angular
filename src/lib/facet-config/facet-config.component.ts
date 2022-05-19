import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SearchConfig } from '../Model';

@Component({
  selector: 'search-toolkit-facet-config',
  templateUrl: './facet-config.component.html',
  styleUrls: ['./facet-config.component.css']
})
export class FacetConfigComponent implements OnInit {
  @Input() searchModel!: SearchConfig;
  @Output() searchModelChange: EventEmitter<SearchConfig> = new EventEmitter<SearchConfig>();
  @Input() hideEmpty: boolean = false;
  @Output() hideEmptyChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() change: EventEmitter<never> = new EventEmitter<never>();
  get showHide(): "show" | "hide" { return this.hideEmpty ? "hide" : "show"; }

  constructor() { }

  ngOnInit(): void {
  }

  toggleShowHide() {
    this.hideEmpty = !this.hideEmpty;
    this.hideEmptyChange.emit(this.hideEmpty);
    this.change.emit();
  }

  toggleCombineFacets() {
    this.searchModel.combineFacets = 
      this.searchModel.combineFacets == "And"
        ? "Or"
        : "And";
    this.searchModelChange.emit(this.searchModel);
    this.change.emit();
  }

  toggleCombineFacetValues() {
    this.searchModel.combineFacetValues = 
      this.searchModel.combineFacetValues == "And"
        ? "Or"
        : "And";
    this.searchModelChange.emit(this.searchModel);
    this.change.emit();
  }

}
