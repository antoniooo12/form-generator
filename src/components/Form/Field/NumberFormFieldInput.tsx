import React from 'react';
import {NumberFormField} from "../../../interface";
import {Controller, UseFormReturn} from "react-hook-form";

interface NumberFormFieldInputProps {
    name: string;
    form: UseFormReturn
    formField: NumberFormField;
}

export const NumberFormFieldInput: React.FC<NumberFormFieldInputProps> = ({
    formField,
    name,
    form
                                                        }) => {
    return (

    <Controller
        render={({
                     field: {onChange, value},
                 }) => {
            return     <input
                type="number"
                name={name}
                value={value || ''}
                onChange={onChange}
                min={formField.min_value}
                max={formField.max_value}
            />
        }}
        control={form.control}
        name={name}
    />
    );
};
