const colors = require('tailwindcss/colors');

const gray = {
    50: 'hsl(0, 0%, 80%)',
    100: 'hsl(0, 0%, 80%)',
    200: 'hsl(0, 0%, 53%)',
    300: 'hsl(0, 0%, 47%)',
    400: 'hsl(0, 0%, 39%)',
    500: 'hsl(0, 0%, 27%)',
    600: 'hsl(0, 0%, 15%)',
    700: 'hsl(0, 0%, 14%)',
    800: 'hsl(232, 28%, 10%)',
    900: 'hsl(0, 0%, 9%)',
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
                header: 'auto 1fr',
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
