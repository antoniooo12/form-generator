import DynamicForm from "./components/Form/DynamicForm.tsx";
import {Box, Input, Typography} from "@mui/material";
import {useFormHandling, useValidationFormFileChange} from "./hooks";

function App() {
    const { formData, handleValidationFormFileChange } = useValidationFormFileChange();
    const { form, handleSubmit, submittedValues, formErrors } = useFormHandling(formData);


    return (
        <Box p={3} display="flex" flexDirection="column" gap={3}
        sx={{
            maxWidth: 500,
        }}
        >
            <Input
                onChange={handleValidationFormFileChange}
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
