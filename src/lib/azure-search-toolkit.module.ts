import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FacetSetComponent } from './facet-set/facet-set.component';
import { FacetValueComponent } from './facet-value/facet-value.component';
import { StringFilterComponent } from './string-filter/string-filter.component';
import {MatSelectModule} from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NumberFilterComponent } from './number-filter/number-filter.component';
import { DatetimeFilterComponent } from './datetime-filter/datetime-filter.component';
import { BooleanFilterComponent } from './boolean-filter/boolean-filter.component';
import { SortLabelComponent } from './sort-label/sort-label.component';
import { MatIconModule } from '@angular/material/icon';
import { SearchHostComponent } from './search-host/search-host.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { DynamicSearchComponent } from './dynamic-search/dynamic-search.component';
import { FieldSelectorComponent } from './field-selector/field-selector.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatChipsModule} from '@angular/material/chips';
import { FacetConfigComponent } from './facet-config/facet-config.component';

@NgModule({
  declarations: [
    FacetSetComponent,
    FacetValueComponent,
    StringFilterComponent,
    NumberFilterComponent,
    DatetimeFilterComponent,
    BooleanFilterComponent,
    SortLabelComponent,
    SearchHostComponent,
    DynamicSearchComponent,
    FieldSelectorComponent,
    FacetConfigComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    BrowserModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatOptionModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatPaginatorModule,
    MatChipsModule,
    MatExpansionModule
  ],
  exports: [
    FacetSetComponent,
    FacetValueComponent,
    StringFilterComponent,
    NumberFilterComponent,
    DatetimeFilterComponent,
    BooleanFilterComponent,
    SortLabelComponent,
    SearchHostComponent,
    DynamicSearchComponent,
    FieldSelectorComponent,
    FacetConfigComponent
  ]
})
export class AzureSearchToolkitModule { }

