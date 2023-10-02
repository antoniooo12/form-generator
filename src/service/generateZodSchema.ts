import {z, ZodSchema, ZodType} from 'zod';
import {DropdownFormField, FieldType, FormField, LongTextFormField, NumberFormField, TextFormField} from "../interface";

const generateTextValidation = (field: TextFormField | LongTextFormField): ZodType<string> => {
    let stringValidator: ZodType<string> = z.string();
    if (field.validation) {
        const regex = new RegExp(field.validation);
        stringValidator = stringValidator.refine(value => regex.test(value), {
            message: 'Invalid input',
        });
    }
    return stringValidator
}

const generateNumberValidation = (field: NumberFormField): ZodType<number> => {
    let numberValidation: ZodType<number> = z.any().refine(value => !isNaN(Number(value)), {
        message: "Expected a numeric string",
        params: (inputValue: string) => Number(inputValue)
    });

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

const generateOptionsValidation = (field: DropdownFormField): ZodType<string> => {
    let optionsValidator: ZodType<string> = z.string();

    if (field.options) {
        const options = field.options.map(option => option.toString())
        optionsValidator = optionsValidator.refine((value: string) => options.includes(value))
    }
    return optionsValidator
}


export const generateZodSchema = (formData: FormField[]): { [key: string]: ZodSchema<any> } => {
    let schema: { [key: string]: ZodSchema<any> } = {};

    formData.forEach((field, index) => {
        const fieldName = `field_${index}`;
        if (field.type === FieldType.text || field.type === FieldType.longtext) {
            schema[fieldName] = generateTextValidation(field)
        } else if (field.type === FieldType.number) {
            schema[fieldName] = generateNumberValidation(field)
        } else if (field.type === FieldType.dropdown) {
            schema[fieldName] = generateOptionsValidation(field)
        }
    });

    return schema
}
