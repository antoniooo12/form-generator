import React from 'react';
import {Controller, UseFormReturn} from "react-hook-form";
import {TextareaAutosize} from "@mui/material";

interface LongTextFormFieldInputProps {
    name: string;
    form: UseFormReturn
}

export const LongTextFormFieldInput: React.FC<LongTextFormFieldInputProps> = ({name, form}) => (
    <Controller
        render={({
                     field: {onChange, value},
                 }) => {
            return <TextareaAutosize
                value={value || ''}
                name={name}
                onChange={onChange}
            />
        }}
        control={form.control}
        name={name}
    />

);
