import React, {useEffect, useState} from 'react'
import {MOCK_FORM_DATA} from "./mock";
import {FormField} from "./interface";
import {generateZodSchema, getDefaultValues} from "./service";
import {z} from "zod";
import {handleFileChange} from "./service/handleFileChange.ts";
import DynamicForm from "./components/Form/DynamicForm.tsx";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Box, Input, Typography} from "@mui/material";

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
        setSubmittedValues(formValues);
    };

    useEffect(() => {
        console.error('form.formState.errors', form.formState.errors)
    }, [form.formState.errors]);

    const handleValidationFormChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const validationForm = await handleFileChange(e)
        const parsedValidationForm = JSON.parse(validationForm)
        setFormData(parsedValidationForm)
    }

    const formErrors = Object.entries(form.formState.errors).map(([key, value]) => {
        return `${key}: ${value?.message}`
    })

    return (
        <Box p={3} display="flex" flexDirection="column" gap={3}
        sx={{
            maxWidth: 500,
        }}
        >
            <Input
                onChange={handleValidationFormChange}
                type="file"
                sx={{ marginBottom: 2 }}
            />
            <DynamicForm
                form={form}
                onSubmit={handleSubmit}
                formData={formData}
            />
            <Box>
                <Typography>
                    errors:
                </Typography>
                {formErrors.map((error) => (
                    <Typography key={error}>
                        {error}
                    </Typography>
                ))}
            </Box>

            <Box>
                <Typography>Submitted Values:</Typography>
                <Typography component="pre">{JSON.stringify(submittedValues, null, 2)}</Typography>
            </Box>
        </Box>
    )
}

export default App
