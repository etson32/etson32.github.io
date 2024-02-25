/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'], 
  theme: {
    extend: {
        animation: {
            'background-shine': 'background-shine 2s linear infinite',
        },
        keyframes: {
            'background-shine': {
                from: {
                    backgroundPosition: '0 0',
                },
                to: {
                    backgroundPosition: '-200% 0',
                },
            },
        },
        backgroundImage: {
            'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        },
        colors: {
            primary: {
                50: '#fff1f2',
                100: '#ffe4e6',
                200: '#fecdd3',
                300: '#fda4af',
                400: '#fb7185',
                500: '#f43f5e', /*main*/
                600: '#e11d48',
                700: '#be123c',
                800: '#9f1239',
                900: '#881337',
                950: '#4c0519',
            },
            daintree: {
              50: '#fef2f2',
              100: '#fee2e2',
              200: '#fecaca',
              300: '#fca5a5',
              400: '#f87171',
              500: '#ef4444',
              600: '#dc2626',
              700: '#b91c1c',
              800: '#991b1b',
              900: '#7f1d1d',
              950: '#450a0a',
            },
            crusta: {
                50: '#fff6ed',
                100: '#ffebd4',
                200: '#ffd2a9',
                300: '#ffb272',
                400: '#fe7f2d',
                500: '#fd6412',
                600: '#ee4a08',
                700: '#c53509',
                800: '#9c2b10',
                900: '#7e2610',
                950: '#440f06',
            },
            dark: {
                50: '#f8fafc',
                100: '#f1f5f9',
                200: '#e2e8f0',
                300: '#cbd5e1',
                400: '#94a3b8',
                500: '#64748b',
                600: '#475569',
                700: '#334155',
                800: '#1e293b',
                900: '#0f172a',
                950: '#020617',
            },
        },
    },
},
darkMode: 'class',
animation: {
    'background-shine': 'background-shine 2s linear infinite',
},
keyframes: {
    'background-shine': {
        from: {
            backgroundPosition: '0 0',
        },
        to: {
            backgroundPosition: '-200% 0',
        },
    },
},
plugins: [],
};