import {FormField} from "../interface";

export const getDefaultValues = (formData: FormField[]): { [key: string]: any } => {
    return formData.reduce((acc: { [key: string]: string| boolean |  number }, field, index) => {
        if (field.default_value !== undefined) {
            acc[`field_${index}`] = field.default_value;
        }
        return acc
    }, {})
}
