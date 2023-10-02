import {FieldType} from "./fieldType.ts";



export interface BaseTextFormField {
    default_value?: string;
    value?: string;
    validation?: string; // This is a regex string
}

export interface TextFormField extends BaseTextFormField{
    type: FieldType.text;
}

export interface NumberFormField {
    type: FieldType.number;
    default_value?: number;
    value?: number;
    min_value?: number;
    max_value?: number;
}

export interface DropdownFormField {
    type: FieldType.dropdown;
    default_value?: string;
    value?: string;
    options: string[];
}

export interface LongTextFormField extends BaseTextFormField {
    type: FieldType.longtext;
}

export type FormField = TextFormField | NumberFormField | DropdownFormField | LongTextFormField;
