import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FacetSetComponent } from './facet-set/facet-set.component';
import { FacetValueComponent } from './facet-value/facet-value.component';
import { StringFilterComponent } from './string-filter/string-filter.component';
import {MatLegacySelectModule as MatSelectModule} from '@angular/material/legacy-select';
import { MatLegacyOptionModule as MatOptionModule } from '@angular/material/legacy-core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NumberFilterComponent } from './number-filter/number-filter.component';
import { DatetimeFilterComponent } from './datetime-filter/datetime-filter.component';
import { BooleanFilterComponent } from './boolean-filter/boolean-filter.component';
import { SortLabelComponent } from './sort-label/sort-label.component';
import { MatIconModule } from '@angular/material/icon';
import { SearchHostComponent } from './search-host/search-host.component';
import {MatLegacyPaginatorModule as MatPaginatorModule} from '@angular/material/legacy-paginator';
import { DynamicSearchComponent } from './dynamic-search/dynamic-search.component';
import { FieldSelectorComponent } from './field-selector/field-selector.component';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatLegacyChipsModule as MatChipsModule} from '@angular/material/legacy-chips';
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
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatOptionModule,
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

