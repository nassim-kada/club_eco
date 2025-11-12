import type { Config } from "tailwindcss"

const config: Config = {
    darkMode: ['class'],
    // 1. Make sure Tailwind scans all your files for classes
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}', // Your components are in /components
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Your page.tsx and layout.tsx are here
    './src/**/*.{js,ts,jsx,tsx,mdx}', // Also good to include /src
  ],
  theme: {
  	extend: {
  		colors: {
  			'ezc-green': '#3a5a40',
  			'ezc-teal': '#588157',
  			'ezc-orange': '#e85d04',
  			'ezc-orange-dark': '#d05303',
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
  		fontFamily: {
  			lexend: [
  				'var(--font-lexend)',
  				'sans-serif'
  			]
  		},
  		animation: {
  			'fade-in': 'fade-in 1s ease-out forwards',
  			'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
  			'fade-in-down': 'fade-in-up 0.8s ease-out forwards'
  		},
  		keyframes: {
  			'fade-in': {
  				from: {
  					opacity: '0'
  				},
  				to: {
  					opacity: '1'
  				}
  			},
  			'fade-in-up': {
  				from: {
  					opacity: '0',
  					transform: 'translateY(20px)'
  				},
  				to: {
  					opacity: '1',
  					transform: 'translateY(0)'
  				}
  			},
  			'fade-in-down': {
  				from: {
  					opacity: '0',
  					transform: 'translateY(-20px)'
  				},
  				to: {
  					opacity: '1',
  					transform: 'translateY(0)'
  				}
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [
    require("tailwindcss-animate"), // You are using animate-fade-in-up, etc.
  ],
}
export default config