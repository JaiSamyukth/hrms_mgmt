import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import colors from "tailwindcss/colors.js";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
        "./src/**/*.{vue,js,ts,jsx,tsx}",
        "./node_modules/flowbite/**/*.js",
        "./node_modules/vue-tailwind-datepicker/**/*.js"
    ],

    // Force generation of all theme classes
    safelist: [
        'bg-dark-bg',
        'bg-dark-surface',
        'bg-accent-blue',
        'border-dark-border',
        'text-dark-text',
        'text-muted-text',
        'dark:bg-dark-bg',
        'dark:bg-dark-surface',
        'dark:border-dark-border',
        'dark:text-dark-text',
        'dark:text-muted-text',
        'hover:bg-blue-600',
        'focus:ring-accent-blue',
        'focus:border-accent-blue',
        'focus:ring-offset-dark-bg',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Noto Sans Arabic', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                "vtd-primary": colors.sky,
                "vtd-secondary": colors.gray,

                // Enterprise Dark Theme - Flat custom colors
                'dark-bg': '#0F172A',       // Deep slate background
                'dark-surface': '#111827',  // Card/surface background
                'dark-border': '#1F2937',   // Borders and dividers
                'accent-blue': '#3B82F6',   // Primary blue accent
                'dark-text': '#E5E7EB',     // Primary text color
                'muted-text': '#9CA3AF',    // Secondary text color
            },
        },
    },

    darkMode: "class",
    plugins: [
        forms,
        require('flowbite/plugin', 'tailwindcss-dir'),
    ]

};
