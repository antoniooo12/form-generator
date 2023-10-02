import {FieldType} from "./fieldType.ts";

export interface FormField {
    default_value?: string | number | boolean;
    value?: string | number | boolean;
    validation?: string; // This is a regex string
    min_value?: number;
    max_value?: number;
    options?: string[] | number[];
    type: FieldType;
}
