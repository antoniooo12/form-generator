import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {FormField} from "../interface";
import {generateZodSchema, getDefaultValues} from "../service";

export const useFormHandling = (formData: FormField[]) => {
    const validationSchema = z.object(generateZodSchema(formData));
    type ValidationSchema = z.infer<typeof validationSchema>;

    const form = useForm({
        resolver: zodResolver(validationSchema),
    });

    const [submittedValues, setSubmittedValues] = useState({});

    useEffect(() => {
        const defaultValues = getDefaultValues(formData);
        form.reset(defaultValues);
    }, [formData]);

    const handleSubmit = (formValues: ValidationSchema) => {
        setSubmittedValues(formValues);
    };

    const formErrors = Object.entries(form.formState.errors).map(([key, value]) => {
        return `${key}: ${value?.message}`;
    });

    return { form, handleSubmit, submittedValues, formErrors };
};
