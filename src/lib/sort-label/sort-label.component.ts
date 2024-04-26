import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { OrderingField } from '../Model';

@Component({
  selector: 'search-toolkit-sort-label',
  templateUrl: './sort-label.component.html',
  styleUrls: ['./sort-label.component.css']
})
export class SortLabelComponent implements OnInit {
  @Input() data!: OrderingField;
  @Output() dataChange: EventEmitter<OrderingField> = new EventEmitter<OrderingField>();
  constructor() { }

  ngOnInit(): void {
  }

  get displayName(): string {
    return this.data.displayName || this.data.fieldName;
  }

  click() {
    if (this.data.order == "Ascending") {
      this.data.order = "Descending";
    }
    else if (this.data.order == "Descending") {
      this.data.order = "None";
    }
    else {
      this.data.order = "Ascending";
    }
    this.dataChange.emit(this.data);
  }
}
