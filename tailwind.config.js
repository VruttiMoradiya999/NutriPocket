/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                lime: {
                    400: '#D8FF42',
                    500: '#C2E600',
                },
                dark: {
                    DEFAULT: '#0A0A0A',
                    lighter: '#141414',
                    card: '#1A1A1A',
                }
            },
            fontFamily: {
                outfit: ['Outfit', 'sans-serif'],
            },
            animation: {
                'shimmer': 'shimmer 2s linear infinite',
            },
            keyframes: {
                shimmer: {
                    '0%': { backgroundPosition: '-1000px 0' },
                    '100%': { backgroundPosition: '1000px 0' },
                },
            },
        },
    },
    plugins: [],
}
