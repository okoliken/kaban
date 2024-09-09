/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius:{
        '20': '1.25rem'
      },
      fontSize:{
        '13': '0.813rem'
      },
      colors:{
        'primary-1':'#635FC7',
        'primary-2':'#A8A4FF',
        'secondary-1':'#635FC71A',
        'secondary-2':'#635FC740',
        'destructive-1':'#EA5555',
        'destructive-2':'#FF9898',
      },
      width:{
        '174':'10.875rem'
      }
    },
  },
  plugins: [],
}

