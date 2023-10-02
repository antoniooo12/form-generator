import React from 'react';
import {TextFormField} from "../../../interface";
import {Controller, UseFormReturn} from "react-hook-form";
import {Input} from "@mui/material";

interface TextFormFieldInputProps {
    name: string;
    formField: TextFormField;
    form: UseFormReturn
}

export const TextFormFieldInput: React.FC<TextFormFieldInputProps> = ({name, form}) => (
    <Controller
        render={({
                     field: {onChange, value},
                 }) => (<Input
            type="text"
            value={value || ''}
            name={name}
            onChange={onChange}
        />)}
        control={form.control}
        name={name}
    />
);
