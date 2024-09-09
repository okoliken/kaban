/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		borderRadius: {
  			'20': '1.25rem',
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		fontSize: {
  			'13': '0.813rem'
  		},
  		colors: {
  			'primary-1': '#635FC7',
  			'primary-2': '#A8A4FF',
  			'secondary-1': '#635FC71A',
  			'secondary-2': '#635FC740',
  			'destructive-1': '#EA5555',
  			'destructive-2': '#FF9898',
  			black: '#000112'
  		},
  		width: {
  			'174': '10.875rem'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

