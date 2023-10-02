import React from "react";

export const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>): Promise<string> => {
    return new Promise((resolve, reject) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                try {
                    const content = event.target?.result;
                    if (typeof content === 'string'){
                        resolve(content);
                    }
                } catch (error) {
                    console.error("Error reading file", error);
                    reject(error);
                }
            };
            reader.onerror = (error) => {
                reject(error);
            };
            reader.readAsText(file);
        }
    });
};

