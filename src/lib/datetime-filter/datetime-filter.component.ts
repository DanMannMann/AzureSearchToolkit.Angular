import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DateTimeFieldFilter, OrderedOperations } from '../Model';

@Component({
  selector: 'search-toolkit-datetime-filter',
  templateUrl: './datetime-filter.component.html',
  styleUrls: ['./datetime-filter.component.css']
})
export class DatetimeFilterComponent implements OnInit {
  @Input() data!: DateTimeFieldFilter;
  @Output() dataChange: EventEmitter<DateTimeFieldFilter> = new EventEmitter<DateTimeFieldFilter>();
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
