import defaultTheme from 'tailwindcss/defaultTheme'
import forms from '@tailwindcss/forms'
import typography from '@tailwindcss/typography'

export default {
    content: ['./vendor/filament/**/*.blade.php'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                danger: {
                    50: 'rgba(var(--danger-color-50), <alpha-value>)',
                    100: 'rgba(var(--danger-color-100), <alpha-value>)',
                    200: 'rgba(var(--danger-color-200), <alpha-value>)',
                    300: 'rgba(var(--danger-color-300), <alpha-value>)',
                    400: 'rgba(var(--danger-color-400), <alpha-value>)',
                    500: 'rgba(var(--danger-color-500), <alpha-value>)',
                    600: 'rgba(var(--danger-color-600), <alpha-value>)',
                    700: 'rgba(var(--danger-color-700), <alpha-value>)',
                    800: 'rgba(var(--danger-color-800), <alpha-value>)',
                    900: 'rgba(var(--danger-color-900), <alpha-value>)',
                    950: 'rgba(var(--danger-color-950), <alpha-value>)',
                },
                gray: {
                    50: 'rgba(var(--gray-color-50), <alpha-value>)',
                    100: 'rgba(var(--gray-color-100), <alpha-value>)',
                    200: 'rgba(var(--gray-color-200), <alpha-value>)',
                    300: 'rgba(var(--gray-color-300), <alpha-value>)',
                    400: 'rgba(var(--gray-color-400), <alpha-value>)',
                    500: 'rgba(var(--gray-color-500), <alpha-value>)',
                    600: 'rgba(var(--gray-color-600), <alpha-value>)',
                    700: 'rgba(var(--gray-color-700), <alpha-value>)',
                    800: 'rgba(var(--gray-color-800), <alpha-value>)',
                    900: 'rgba(var(--gray-color-900), <alpha-value>)',
                    950: 'rgba(var(--gray-color-950), <alpha-value>)',
                },
                info: {
                    50: 'rgba(var(--info-color-50), <alpha-value>)',
                    100: 'rgba(var(--info-color-100), <alpha-value>)',
                    200: 'rgba(var(--info-color-200), <alpha-value>)',
                    300: 'rgba(var(--info-color-300), <alpha-value>)',
                    400: 'rgba(var(--info-color-400), <alpha-value>)',
                    500: 'rgba(var(--info-color-500), <alpha-value>)',
                    600: 'rgba(var(--info-color-600), <alpha-value>)',
                    700: 'rgba(var(--info-color-700), <alpha-value>)',
                    800: 'rgba(var(--info-color-800), <alpha-value>)',
                    900: 'rgba(var(--info-color-900), <alpha-value>)',
                    950: 'rgba(var(--info-color-950), <alpha-value>)',
                },
                primary: {
                    50: 'rgba(var(--primary-color-50), <alpha-value>)',
                    100: 'rgba(var(--primary-color-100), <alpha-value>)',
                    200: 'rgba(var(--primary-color-200), <alpha-value>)',
                    300: 'rgba(var(--primary-color-300), <alpha-value>)',
                    400: 'rgba(var(--primary-color-400), <alpha-value>)',
                    500: 'rgba(var(--primary-color-500), <alpha-value>)',
                    600: 'rgba(var(--primary-color-600), <alpha-value>)',
                    700: 'rgba(var(--primary-color-700), <alpha-value>)',
                    800: 'rgba(var(--primary-color-800), <alpha-value>)',
                    900: 'rgba(var(--primary-color-900), <alpha-value>)',
                    950: 'rgba(var(--primary-color-950), <alpha-value>)',
                },
                secondary: {
                    50: 'rgba(var(--secondary-color-50), <alpha-value>)',
                    100: 'rgba(var(--secondary-color-100), <alpha-value>)',
                    200: 'rgba(var(--secondary-color-200), <alpha-value>)',
                    300: 'rgba(var(--secondary-color-300), <alpha-value>)',
                    400: 'rgba(var(--secondary-color-400), <alpha-value>)',
                    500: 'rgba(var(--secondary-color-500), <alpha-value>)',
                    600: 'rgba(var(--secondary-color-600), <alpha-value>)',
                    700: 'rgba(var(--secondary-color-700), <alpha-value>)',
                    800: 'rgba(var(--secondary-color-800), <alpha-value>)',
                    900: 'rgba(var(--secondary-color-900), <alpha-value>)',
                    950: 'rgba(var(--secondary-color-950), <alpha-value>)',
                },
                success: {
                    50: 'rgba(var(--success-color-50), <alpha-value>)',
                    100: 'rgba(var(--success-color-100), <alpha-value>)',
                    200: 'rgba(var(--success-color-200), <alpha-value>)',
                    300: 'rgba(var(--success-color-300), <alpha-value>)',
                    400: 'rgba(var(--success-color-400), <alpha-value>)',
                    500: 'rgba(var(--success-color-500), <alpha-value>)',
                    600: 'rgba(var(--success-color-600), <alpha-value>)',
                    700: 'rgba(var(--success-color-700), <alpha-value>)',
                    800: 'rgba(var(--success-color-800), <alpha-value>)',
                    900: 'rgba(var(--success-color-900), <alpha-value>)',
                    950: 'rgba(var(--success-color-950), <alpha-value>)',
                },
                warning: {
                    50: 'rgba(var(--warning-color-50), <alpha-value>)',
                    100: 'rgba(var(--warning-color-100), <alpha-value>)',
                    200: 'rgba(var(--warning-color-200), <alpha-value>)',
                    300: 'rgba(var(--warning-color-300), <alpha-value>)',
                    400: 'rgba(var(--warning-color-400), <alpha-value>)',
                    500: 'rgba(var(--warning-color-500), <alpha-value>)',
                    600: 'rgba(var(--warning-color-600), <alpha-value>)',
                    700: 'rgba(var(--warning-color-700), <alpha-value>)',
                    800: 'rgba(var(--warning-color-800), <alpha-value>)',
                    900: 'rgba(var(--warning-color-900), <alpha-value>)',
                    950: 'rgba(var(--warning-color-950), <alpha-value>)',
                },
            },
            fontFamily: {
                sans: ['var(--font-family)', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [forms, typography],
}
