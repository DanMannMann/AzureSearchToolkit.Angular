import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { FacetSet, FieldFilter, Formattable, getDisplayString, SearchConfig, SelectField } from '../Model';
import { trigger, transition, animate, style } from '@angular/animations'

@Component({
  selector: 'search-toolkit-search-host',
  templateUrl: './search-host.component.html',
  styleUrls: ['./search-host.component.css'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateX(-100%)'}),
        animate('200ms ease-in', style({transform: 'translateX(0%)'}))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({transform: 'translateX(-100%)'}))
      ])
    ])
  ]
})
export class SearchHostComponent implements OnInit, OnChanges {
  @Input() searchModel!: SearchConfig;
  @Input() hideFilters: string[] = [];
  @Input() hideFacets: string[] = [];
  @Input() hideSelectFields: string[] = [];
  @Input() showFilters: string[] = [];
  @Input() showFacets: string[] = [];
  @Input() showSelectFields: string[] = [];
  @Input() pageSizes: number[] = [20, 30, 50, 100];

  @Output() searchModelChange: EventEmitter<SearchConfig> = new EventEmitter<SearchConfig>();
  hideEmpty: boolean = false;
  showSettings: boolean = false;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (Object.keys(changes).some(x => x.startsWith("show") || x.startsWith("hide") || x == "searchModel")) {
      this.setShowHide();
    }
  }

  private setShowHide() {
    if (!this.searchModel) return;
    if (this.showFilters.length) {
      this.hideFilters = (this.searchModel.boolFieldFilters as FieldFilter[])
        .concat(this.searchModel.dateTimeFieldFilters)
        .concat(this.searchModel.numericFieldFilters)
        .concat(this.searchModel.stringFieldFilters)
        .filter(x => !this.showFilters.includes(x.fieldName))
        .map(x => x.fieldName);
    }
    if (this.showFacets.length) {
      this.hideFacets = this.searchModel.facets
        .filter(x => !this.showFacets.includes(x.facetName))
        .map(x => x.facetName);
    }
    if (this.showSelectFields.length) {
      this.hideSelectFields = this.searchModel.selectFields
        .filter(x => !this.showSelectFields.includes(x.fieldName))
        .map(x => x.fieldName);
    }
  }

  ngOnInit(): void {
  }

  clear(filter: FieldFilter) {
    const f = filter as any;
    f.value = null;
    f.valueTo = null;
    this.search();
  }

  facetSetIdentity(index: number, item: FacetSet) {
    return item?.facetName || "";
  }

  selectedFilters(items: FieldFilter[]): any[] {
    return this.filters(items).filter((x: any) => x.value || x.value === 0 || x.value === false || x.valueTo || x.valueTo === 0 || x.valueTo === false);
  }

  filters(items: FieldFilter[]): any[] {
    return items.filter(f => !this.hideFilters.includes(f.fieldName));
  }

  selectFields(items: SelectField[]) {
    return items.filter(f => !this.hideSelectFields.includes(f.fieldName));
  }

  facets(items: FacetSet[]) {
    return items.filter(f => !this.hideFacets.includes(f.facetName));
  }

  fieldDisplayName(field: any) {
    return field.displayName || field.fieldName;
  }

  getDisplayString = (field: FieldFilter, val: any) => 
    this.searchModel.selectFields.some(x => x.fieldName == field.fieldName)
      ? getDisplayString(this.lookUpField(field), val)
      : val;

  private lookUpField(field: FieldFilter): Formattable {
    return this.searchModel.selectFields.filter(x => x.fieldName == field.fieldName)[0];
  }

  setPage(page: PageEvent) {
    this.searchModel.resultsPerPage = page.pageSize;
    this.searchModel.page = page.pageIndex + 1;
    this.search();
  }

  search() {
    this.searchModelChange.emit(this.searchModel);
  }

  facetsChanged() {
    this.search();
  }
}
