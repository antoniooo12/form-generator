import { useState } from 'react';
import {FormField} from "../interface";
import {handleFileChange} from "../service/handleFileChange.ts";
import {MOCK_FORM_DATA} from "../mock";

export const useValidationFormFileChange = () => {
    const [formData, setFormData] = useState<FormField[]>(MOCK_FORM_DATA);

    const handleValidationFormFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const validationForm = await handleFileChange(e);
        const parsedValidationForm = JSON.parse(validationForm);
        setFormData(parsedValidationForm);
    };

    return { formData, handleValidationFormFileChange };
};
