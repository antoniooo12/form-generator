import React from 'react';
import {DropdownFormField} from "../../../interface";
import {Controller, UseFormReturn} from "react-hook-form";

interface DropdownField {
    form: UseFormReturn;
    name: string;
    formField: DropdownFormField;
}

export const DropdownFormFieldInput: React.FC<DropdownField> = ({name, formField, form}) => (
    <Controller
        render={({
                     field: {onChange, value},
                 }) => {
            return <>
                <select name={name} onChange={onChange} value={value || ''}>
                    <option value="">Select an option</option>
                    {formField.options?.map((option, optIndex) => (
                        <option key={optIndex} value={option}>
                            {option}
                        </option>
                    ))}
                </select>

            </>
        }}
        control={form.control}
        name={name}
    />
);
