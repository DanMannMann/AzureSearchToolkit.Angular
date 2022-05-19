import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { BooleanFieldFilter } from '../Model';

@Component({
  selector: 'search-toolkit-boolean-filter',
  templateUrl: './boolean-filter.component.html',
  styleUrls: ['./boolean-filter.component.css']
})
export class BooleanFilterComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() data!: BooleanFieldFilter;
  @Output() dataChange: EventEmitter<BooleanFieldFilter> = new EventEmitter<BooleanFieldFilter>();
  @ViewChild('checky') checky!: ElementRef<HTMLInputElement>;
  constructor() { }

  ngAfterViewInit(): void {
    if (!this.data) return;
    this.setThreeStateCheck();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.checky) return;
    if (changes["data"]) {
      this.setThreeStateCheck();
    }
  }

  private setThreeStateCheck() {
    if (this.data.value === true) {
      this.checky.nativeElement.checked = true;
      if (this.checky.nativeElement.indeterminate == true) {
        this.checky.nativeElement.indeterminate = false;
      }
    } else if (this.data.value === false) {
      this.checky.nativeElement.checked = false;
      if (this.checky.nativeElement.indeterminate == true) {
        this.checky.nativeElement.indeterminate = false;
      }
    }
    else {
      if (this.checky.nativeElement.indeterminate != true) {
        this.checky.nativeElement.indeterminate = true;
      }
    }
  }

  ngOnInit(): void {
  }

  get displayName(): string {
    return this.data.displayName || this.data.fieldName;
  }

  checkChanged($event: boolean) {
    if ($event == true && this.data.value == false) {
      this.data.value = undefined;
      if (this.checky.nativeElement.indeterminate != true) {
        this.checky.nativeElement.indeterminate = true;
      }
    }
    else if ($event == true) {
      this.data.value = true;
      if (this.checky.nativeElement.indeterminate == true) {
        this.checky.nativeElement.indeterminate = false;
      }
    }
    else {
      this.data.value = false;
      if (this.checky.nativeElement.indeterminate == true) {
        this.checky.nativeElement.indeterminate = false;
      }
    }
    this.dataChange.emit(this.data);
  }
}
