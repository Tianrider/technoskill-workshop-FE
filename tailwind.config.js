/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "primary-gray": "#212125",
                "primary-black": "#0F0F10",
                "primary-orange": "#FF8901",
                "secondary-gray": "#18181B",
            },
            fontFamily: {
                sf: ["SF Pro Display", "sans-serif"],
            },
            animation: {
                "spin-slow": "spin 6s linear infinite",
            },
        },
    },
    plugins: [],
};
