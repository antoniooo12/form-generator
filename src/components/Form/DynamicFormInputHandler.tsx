import React from 'react';
import {FieldType, FormField} from "../../interface";
import {DropdownFormFieldInput, LongTextFormFieldInput, NumberFormFieldInput, TextFormFieldInput} from "./Field";
import {UseFormReturn} from "react-hook-form";

interface DynamicFormInputHandlerProps {
    form:  UseFormReturn;
    formField: FormField;
    index: number;
}

export const DynamicFormInputHandler: React.FC<DynamicFormInputHandlerProps> = ({formField, index, form}) => {
    const name = `field_${index}`;

    return (<div>
            {
                formField.type === FieldType.text &&
                <TextFormFieldInput
                    form={form}
                    name={name}
                    formField={formField}
                />
            }
            {
                formField.type === FieldType.longtext &&
                <LongTextFormFieldInput
                    form={form}
                    name={name}
                />
            }
            {
                formField.type === FieldType.number &&
                <NumberFormFieldInput
                    form={form}
                    name={name}
                    formField={formField}
                />
            }
            {
                formField.type === FieldType.dropdown &&
                <DropdownFormFieldInput
                    form={form}
                    name={name}
                    formField={formField}
                />
            }
        </div>
    )
}
