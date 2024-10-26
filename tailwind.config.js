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
			'6': '0.375rem',
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
			'soft-gray':'#E4EBFA',
			'dark-gray':'#828FA3',
			'light-gray':'#F4F7FD',
  			black: '#000112',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		width: {
  			'174': '10.875rem',
  			sidebar: 'var(--sidebar-width)',
  		},
  		fontFamily: {
  			PlusJakarta: ["Plus Jakarta Sans", 'sans-serif']
  		},
		backgroundImage: {
			'add-column-gradient': 'linear-gradient(180deg, #E9EFFA 0%, rgba(233, 239, 250, 0.5) 100%)',
		},
		dropShadow: {
			'll': '0px 4px 6px 0px #364E7E1A'
		  },
		boxShadow: {
			'll': '0px 4px 6px 0px #364E7E1A',
			'popover':'0px 10px 20px 0px #364E7E40'
		  }
  	}
  },
  plugins: [
	require("tailwindcss-animate"),
	require('@tailwindcss/typography'),
	function({ addBase }) {
	  addBase({
	    ':root': {
	      '--sidebar-width': '18.75rem',
	    },
	    '@screen md': {
	      ':root': {
	        '--sidebar-width': '16.25rem',
	      },
	    },
	  });
	},
  ],
}
