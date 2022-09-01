const colors = require('tailwindcss/colors');

const gray = {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: 'hsl(232, 28%, 10%)', // xiketic
    900: '#111827',
};

const primary = {
    50: 'hsl(170, 16%, 65%)', // opal
    100: 'hsl(0, 0%, 100%)',
    200: 'hsl(0, 0%, 100%)',
    300: 'hsl(0, 0%, 100%)',
    400: 'hsl(0, 0%, 100%)',
    500: 'hsl(210, 100%, 48%)', // azure
    600: 'hsl(0, 0%, 100%)',
    700: 'hsl(0, 0%, 100%)',
    800: 'hsl(0, 0%, 100%)',
    900: 'hsl(0, 0%, 100%)',
};

module.exports = {
    content: ['./resources/scripts/**/*.{js,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                header: ['"IBM Plex Sans"', '"Roboto"', 'system-ui', 'sans-serif'],
            },
            colors: {
                black: '#131a20',
                // "primary" and "neutral" are deprecated, prefer the use of "blue" and "gray"
                // in new code.
                primary: primary,
                gray: gray,
                neutral: gray,
                cyan: colors.cyan,
                console: '#181818',
            },
            fontSize: {
                '2xs': '0.625rem',
            },
            transitionDuration: {
                250: '250ms',
            },
            borderColor: (theme) => ({
                default: theme('colors.neutral.400', 'currentColor'),
            }),
            gridTemplateColumns: {
                header: 'max-content 1fr',
            },
        },
    },
    plugins: [
        require('@tailwindcss/line-clamp'),
        require('@tailwindcss/forms')({
            strategy: 'class',
        }),
    ],
};
