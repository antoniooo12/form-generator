import React, {useEffect, useState} from 'react'
import {MOCK_FORM_DATA} from "./mock";
import {FormField} from "./interface";
import {generateZodSchema, getDefaultValues} from "./service";
import {z} from "zod";
import {handleFileChange} from "./service/handleFileChange.ts";
import DynamicForm from "./components/Form/DynamicForm.tsx";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";

function App() {
    const [formData, setFormData] = useState<FormField[]>(MOCK_FORM_DATA)
    const validationSchema = z.object(generateZodSchema(formData))
    type ValidationSchema = z.infer<typeof validationSchema>;

    const form = useForm({
        resolver: zodResolver(validationSchema),
    });

    const [submittedValues, setSubmittedValues] = useState({})


    useEffect(() => {
        const defaultValues = getDefaultValues(formData)
        form.reset(defaultValues)
    }, [formData]);


    const handleSubmit = (formValues: ValidationSchema) => {
        console.log('formValues', formValues)
        setSubmittedValues(formValues);
    };

    useEffect(() => {
        console.log('form.formState.errors', form.formState.errors)
    }, [form.formState.errors]);

    const handleValidationFormChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const validationForm = await handleFileChange(e)
        const parsedValidationForm = JSON.parse(validationForm)
        setFormData(parsedValidationForm)
    }

    return (
        <div className="App">
            <input type="file" onChange={handleValidationFormChange}/>
            <DynamicForm
                form={form}
                onSubmit={handleSubmit}
                formData={formData}
            />
            <div>
                <h2>Submitted Values:</h2>
                <pre>{JSON.stringify(submittedValues, null, 2)}</pre>
            </div>
        </div>
    )
}

export default App
