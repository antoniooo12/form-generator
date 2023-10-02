import {FieldType, FormField} from "../interface";

export const MOCK_FORM_DATA: FormField[] = [
    {
        default_value: "John Doe",
        validation: "^[a-zA-Z ]+$", // regex for alphabetic characters and spaces
        type: FieldType.text
    },
    {
        default_value: "This is a longer text...",
        type: FieldType.longtext
    },
    {
        default_value: 25,
        min_value: 10,
        max_value: 50,
        type: FieldType.number
    },
    {
        options: ["Option1", "Option2", "Option3"],
        type: FieldType.dropdown
    }
]
