import React from 'react';
import {TextFormField} from "../../../interface";
import {Controller, UseFormReturn} from "react-hook-form";

interface TextFormFieldInputProps {
    name: string;
    formField: TextFormField;
    form: UseFormReturn
}

export const TextFormFieldInput: React.FC<TextFormFieldInputProps> = ({name, formField, form}) => (
    <Controller
        render={({
                     field: {onChange, value},
                 }) => (<input
            type="text"
            value={value || ''}
            name={name}
            onChange={onChange}
            pattern={formField.validation}
        />)}
        control={form.control}
        name={name}
    />
);
