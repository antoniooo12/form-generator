import React from 'react';
import {FormField} from "../../interface";
import {DynamicFormInputHandler} from "./DynamicFormInputHandler.tsx";
import {UseFormReturn} from "react-hook-form";

interface DynamicFormProps {
    form: UseFormReturn;
    onSubmit: (formValues: any) => void;
    formData: FormField[];
}

export const DynamicForm: React.FC<DynamicFormProps> = ({
                                                            formData,
                                                            onSubmit,
                                                            form,
                                                        }) => {
    return (
        <form onSubmit={form.handleSubmit(onSubmit)}>
            {formData.map((field, index) =>
                (<DynamicFormInputHandler
                    form={form}
                    index={index}
                    formField={field}
                    key={index}
                />)
            )}
            <button type="submit">Submit</button>
        </form>
    );
};

export default DynamicForm;
