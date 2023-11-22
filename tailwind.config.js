/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*{.ts,.tsx,.js,.jsx}',
    './*.html'
  ],
  theme: {
    extend: {
      width: {
        '25%': '25%',
        '16px': '16px'
      }
    },
  },
  plugins: [],
}

