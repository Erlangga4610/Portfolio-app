import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                // Gunakan Inter sebagai font utama (body)
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
                // Gunakan Plus Jakarta Sans untuk Judul
                heading: ['"Plus Jakarta Sans"', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [require('@tailwindcss/forms')],
};
