import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { getDisplayString, SearchConfig, SearchOperation, SelectField } from '../Model';

@Component({
  selector: 'search-toolkit-dynamic-search',
  templateUrl: './dynamic-search.component.html',
  styleUrls: ['./dynamic-search.component.css']
})
export class DynamicSearchComponent<T> implements OnInit, OnChanges {
  @Input() searchOperation!: SearchOperation<T>;
  @Output() searchModelChange: EventEmitter<SearchConfig> = new EventEmitter<SearchConfig>();

  @Input() hideFilters: string[] = [];
  @Input() hideFacets: string[] = [];
  @Input() hideSelectFields: string[] = [];
  @Input() hideColumns: string[] = [];
  @Input() showFilters: string[] = [];
  @Input() showFacets: string[] = [];
  @Input() showSelectFields: string[] = [];
  @Input() showColumns: string[] = [];
  @Input() pageSizes: number[] = [20, 30, 50, 100];

  get searchModel(): SearchConfig {
    return this.searchOperation.searchConfig;
  }
  get currentPageResults(): T[] {
    return this.searchOperation.results;
  }

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (Object.keys(changes).some(x => x.startsWith("show") || x.startsWith("hide") || x == "searchOperation")) {
      this.setShowHide();
    }
  }

  private setShowHide() {
    if (!this.searchOperation) return;
    if (this.showColumns.length) {
      this.hideColumns = this.searchOperation.searchConfig.selectFields
        .filter(x => !this.showColumns.includes(x.fieldName))
        .map(x => x.fieldName);
    }
  }
  
  columns(items: SelectField[]) {
    return items.filter(f => !this.hideColumns.includes(f.fieldName));
  }

  getDisplayName(field: SelectField) {
    return field.displayName || field.fieldName;
  }

  getDisplayString = (item: SelectField, val: any) => getDisplayString(item, val);

  getPropertyCaseInsensitive(prop: string, result: any) {

    const key = Object.keys(result).find(key => key.toLowerCase() === prop.toLowerCase());
    if (!key) return undefined;
    return result[key];
  }

  hasOrderingField(key: string) {
    return this.searchModel.orderingFields.some(x => x.fieldName == key);
  }
  orderingField(key: string) {
    if (this.searchModel.orderingFields.some(x => x.fieldName == key)) {
      return this.searchModel.orderingFields.filter(x => x.fieldName == key)[0];
    }
    throw "field not found";
  }

  get selectedFields() {
    // if none are selected, act like all are
    if (!this.searchModel.selectFields.some(x => x.selected)) 
      return this.searchModel.selectFields;

    return this.searchModel.selectFields.filter(x => x.selected);
  }

}
