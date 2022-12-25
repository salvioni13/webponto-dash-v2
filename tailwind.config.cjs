/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    darkMode: 'class',
    lightMode: 'class',
    theme: {
        extend: {
            transitionProperty: {
                'width': 'width'
            },
        },
    },
    plugins: [],
};