import {z, ZodSchema, ZodType} from 'zod';
import {FieldType, FormField} from "../interface";

const generateTextValidation = (field: FormField): ZodType<string> => {
    let stringValidator: ZodType<string> = z.string();
    if (field.validation) {
        const regex = new RegExp(field.validation);
        stringValidator = stringValidator.refine(value => regex.test(value), {
            message: 'Invalid input',
        });
    }
    return stringValidator
}

const generateNumberValidation = (field: FormField): ZodType<number> => {
    let numberValidation: ZodType<number> = z.number();

    if (field.min_value !== undefined) {
        const minValue = field.min_value
        numberValidation = numberValidation.refine(value => value >= minValue, {
            message: `Value should be greater than or equal to ${field.min_value}`,
        });
    }

    if (field.max_value !== undefined) {
        const maxValue = field.max_value
        numberValidation = numberValidation.refine(value => value <= maxValue, {
            message: `Value should be less than or equal to ${field.max_value}`,
        });
    }
    return numberValidation
}

const generateOptionsValidation = (field: FormField): ZodType<string> => {
    let optionsValidator: ZodType<string> = z.string();
    optionsValidator = z.string()

    if (field.options) {
        const options = field.options.map(option => option.toString())
        optionsValidator = optionsValidator.refine((value: string) => options.includes(value))
    }
    return optionsValidator
}

const validationMapping: { [key in FieldType]?: (field: FormField) => ZodSchema<any> } = {
    [FieldType.text]: generateTextValidation,
    [FieldType.number]: generateNumberValidation,
    [FieldType.dropdown]: generateOptionsValidation,
};
export const generateZodSchema = (formData: FormField[]): { [key: string]: ZodSchema<any> } => {
    let schema: { [key: string]: ZodSchema<any> } = {};

    formData.forEach((field, index) => {
        const fieldName = `field_${index}`;
        const validationFunction = validationMapping[field.type];
        if (validationFunction) {
            schema[fieldName] = validationFunction(field);
        }
    });

    return schema
}
