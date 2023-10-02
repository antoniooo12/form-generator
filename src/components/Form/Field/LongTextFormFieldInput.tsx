import React from 'react';
import {Controller, UseFormReturn} from "react-hook-form";

interface LongTextFormFieldInputProps {
    name: string;
    form: UseFormReturn
}

export const LongTextFormFieldInput: React.FC<LongTextFormFieldInputProps> = ({name, form}) => (
    <Controller
        render={({
                     field: {onChange, value},
                 }) => {
            return <textarea
                value={value || ''}
                name={name}
                onChange={onChange}
            />
        }}
        control={form.control}
        name={name}
    />

);
