module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    height: theme => ({
      auto: 'auto',
      ...theme('spacing'),
      full: '100%',
      screen: '100vh',
      android: 'calc(var(--vh) * 100)',
    }),
    minHeight: theme => ({
      '0': '0',
      ...theme('spacing'),
      full: '100%',
      screen: '100vh',
      android: 'calc(var(--vh) * 100)',
    }),
    extend: {
      keyframes: {
        'alternate-down': {
          '0%, 100%': { transform: 'translateY(50%)' },
          '50%': { transform: 'none' },
        },
        'scale-up': {
          '100%': { transform: 'scale(150%)', 'animation-fill-mode': 'forwards'}
        },
        'fade-down': {
          '0%': {
            transform: 'translateY(-25%)',
            opacity: '0'
          },
          '25%': {
            transform: 'translateY(25%)',
            opacity: '1'
          },
          '50%': {
            transform: 'translateY(25%)',
            opacity: '0'
          },
          '100%': {
            transform: 'translateY(25%)',
            opacity: '0'
          }
        },
        'fade-up': {
          '0%': {
            transform: 'translateY(0%)',
            opacity: '0'
          },
          '25%': {
            transform: 'translateY(-35%)',
            opacity: '1'
          },
          '50%': {
            transform: 'translateY(-35%)',
            opacity: '0'
          },
          '100%': {
            transform: 'translateY(-35%)',
            opacity: '0'
          }
        },
        'fade-out': {
          '0%': {
            opacity: 0
          },
          '50%': {
            opacity: 100
          },
          '100%': {
            opacity: 0
          }
        },
        'fade-in': {
          '0%': {
            opacity: 0
          },
          '100%': {
            opacity: 100
          }
        }
      },
      animation: {
        'alternate-down' : "alternate-down 2s ease-in-out infinite",
        'scale-up': "scale-up 0.2s ease-in-out",
        'fade-down': "fade-down 1s ease-in-out infinite",
        'fade-up': "fade-up 1s ease-in-out infinite",
        'fade-out': "fade-out 1s ease-in-out infinite",
        'fade-in': "fade-in 0.5s ease-in"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        jakarta: ['PlusJakartaSans', 'sans-serif']
      },
      lineSpacing: {
        tight: '-.015em'
      },
      height: {
        'half-screen': '50vh'
      }
    },
  },
  plugins: [],
}
