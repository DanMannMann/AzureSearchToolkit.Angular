import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { SelectField } from '../Model';

@Component({
  selector: 'search-toolkit-field-selector',
  templateUrl: './field-selector.component.html',
  styleUrls: ['./field-selector.component.css']
})
export class FieldSelectorComponent implements OnInit, OnChanges {
  @Input() data!: SelectField[];
  @Output() selectionChanged: EventEmitter<SelectField[]> = new EventEmitter<SelectField[]>();
  selected: SelectField[] = [];
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["data"]) {
      this.selected = this.data.filter(x => x.selected === true);
    }
  }
  
  getDisplayName(field: SelectField) {
    return field.displayName || field.fieldName;
  }

  onChange() {
    this.data.forEach(x => x.selected = false);
    this.selected.forEach(x => x.selected = true);
    this.selectionChanged.emit(this.data);
  }

  ngOnInit(): void {
  }

}
