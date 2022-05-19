import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { OrderedOperations, StringFieldFilter } from '../Model';

@Component({
  selector: 'search-toolkit-string-filter',
  templateUrl: './string-filter.component.html',
  styleUrls: ['./string-filter.component.scss']
})
export class StringFilterComponent implements OnInit {
  @Input() data!: StringFieldFilter;
  @Output() dataChange: EventEmitter<StringFieldFilter> = new EventEmitter<StringFieldFilter>();
  constructor() { }

  ngOnInit(): void {
  }

  get displayName(): string {
    return this.data.displayName || this.data.fieldName;
  }

  get orderedOperations() {
    return OrderedOperations;
  }

}
