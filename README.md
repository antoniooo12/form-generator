# Dynamic Form Generator

A React application that dynamically generates a form based on provided JSON data. The form supports various field types, validations, and displays submitted values.

## Features

- Dynamic form generation based on JSON data.
- Built-in validation using Zod and React Hook Form.
- Supports text, long text, dropdown, and number input types.
- Displays errors and submitted values.
- UI components built with Material-UI.

## Installation

1. **Clone the repository:**


2. **Install the dependencies:**

3. **Start the development server:**


## Usage

1. Navigate to the application in your browser.
2. Upload a JSON file with the desired form structure.
3. Fill out the generated form and submit.
4. View errors (if any) and submitted values.

## JSON Format

The application expects the JSON data to be in the following format:


{ [{
devault_value?: string | number | boolean;
value?: string | number | boolean;
validation?: string (regex);
min_value?: number;
max_value?: number;
options?: string[] | number[];
type: “text” | “longtext” | “dropdown” | “number”
},…]
}


## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
