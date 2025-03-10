/** @type {import('tailwindcss').Config} */
module.exports = {
    theme: {
        extend: {
            colors: {
                background: "var(--color-background)",
                foreground: "var(--color-foreground)",
                primary: {
                    50: "var(--color-primary-50)",
                    100: "var(--color-primary-100)",
                    300: "var(--color-primary-300)",
                    500: "var(--color-primary-500)",
                    700: "var(--color-primary-700)",
                    900: "var(--color-primary-900)",
                    950: "var(--color-primary-950)",
                },
                gray: {
                    50: "var(--color-gray-50)",
                    300: "var(--color-gray-300)",
                    600: "var(--color-gray-600)",
                    900: "var(--color-gray-900)",
                },
            },
        },
    },
};
