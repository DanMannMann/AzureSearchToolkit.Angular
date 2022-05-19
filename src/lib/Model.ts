export interface FacetValue {
    value: any;
    valueTo: any;
    selected: boolean;
    count: number;
    filteredCount: number;
}

export interface Formattable {
    numberFormat: string;
    valueType: "String" | "Numeric" | "DateTime" | "Boolean";
    dateTimeFormat: "DateTime" | "Date" | "Time";
}

export interface FacetSet extends Formattable {
    facetName: string;
    displayName: string;
    values: FacetValue[];
    facetType: "Value" | "Range";
    facetRangeType: "Value" | "Range" | "Interval";
    isCollection: boolean;
}

export interface Field {
    fieldName: string;
    displayName?: string;
}

export interface SearchField extends Field {
    selected: boolean;
}

export interface SelectField extends Field, Formattable {
    selected: boolean;
}

export interface OrderingField extends Field {
    order: "Ascending" | "None" | "Descending";
}

export interface FieldFilter extends Field {
    isCollection: boolean;
}

export const OrderedOperations = ['GreaterThan', 'LessThan', 'GreaterThanOrEqual', 'LessThanOrEqual', 'Equal', 'Between'] as const;
export type OrderedOperationsTuple = typeof OrderedOperations;
export type OrderedOperations = OrderedOperationsTuple[number];  // same as "GreaterThan" | "LessThan" | ...

export interface OrderedFieldFilter extends FieldFilter {
    operation: OrderedOperations;
}

export interface StringCollectionFieldFilter extends FieldFilter {
    operation: "Equal";
    value?: string;
}

export interface BooleanFieldFilter extends FieldFilter {
    operation: "Equal";
    value?: boolean;
}

export interface StringFieldFilter extends OrderedFieldFilter {
    value?: string;
    valueTo?: string;
}

export interface NumericFieldFilter extends OrderedFieldFilter {
    value?: number;
    valueTo?: number;
}

export interface DateTimeFieldFilter extends OrderedFieldFilter {
    value?: string;
    valueTo?: string;
}

export interface SearchConfig {
    search: string;
    facets: FacetSet[];
    selectFields: SelectField[];
    searchFields: SearchField[];
    orderingFields: OrderingField[];
    numericFieldFilters: NumericFieldFilter[];
    stringFieldFilters: StringFieldFilter[];
    boolFieldFilters: BooleanFieldFilter[];
    dateTimeFieldFilters: DateTimeFieldFilter[];
    page: number;
    totalPages: number;
    resultsPerPage: number;
    totalResults: number;
    combineFacets: "And" | "Or";
    combineFacetValues: "And" | "Or";
}

export interface SearchOperation<T> {
    searchConfig: SearchConfig;
    results: T[];
}

export function getDisplayString(item: Formattable, val: any) {
    switch(item.valueType) {
      case "DateTime":
          switch (item.dateTimeFormat) {
              case "DateTime": return new Date(Date.parse(val)).toLocaleString();
              case "Date": return new Date(Date.parse(val)).toLocaleDateString();
              case "Time": return new Date(Date.parse(val)).toLocaleTimeString();
          }
      case "Numeric":
        if (!item.numberFormat) return val;
        const bits = /(.*?)0(\.?)(0*)(.*)/.exec(item.numberFormat);
        if (bits?.length != 5) throw "bad format";

        if (bits[3]) val = (val as number).toFixed(bits[3].length);
        else if (bits[2] == ".") (val as number).toFixed(0); // if period then no digits, truncate to no decimals
        return `${bits[1]}${val}${bits[4]}`;
    }
    return val;
  }

// TODO this bit should live in testbed
export interface User {
    id: string;
    firstName: string;
    lastName: string;
    description: string;
    role: string;
    tags: string[];
    lastModifiedDate?: any;
    joinedDate: Date;
    balance: number;
    enabled: boolean;
}
