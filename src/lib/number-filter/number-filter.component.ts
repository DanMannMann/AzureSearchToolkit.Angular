import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NumericFieldFilter, OrderedOperations } from '../Model';

@Component({
  selector: 'search-toolkit-number-filter',
  templateUrl: './number-filter.component.html',
  styleUrls: ['./number-filter.component.css']
})
export class NumberFilterComponent implements OnInit {
  @Input() data!: NumericFieldFilter;
  @Output() dataChange: EventEmitter<NumericFieldFilter> = new EventEmitter<NumericFieldFilter>();
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
