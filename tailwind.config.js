module.exports = {
  purge: ['site/layouts/**/*.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontSize: {
      '3xs': '.5rem',
      'xxs': '.65rem',
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
      '8xl': '6rem',
      '9xl': '8rem',
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#FF3300',
      'aqua': '#16FFBD'
    }),
    extend: {
      screens: {
        '3xl': '2000px',
      },
      gridRow: {
        'span-7': 'span 7 / span 7',
        'span-8': 'span 8 / span 8',
        'span-9': 'span 9 / span 9',
      },
      transitionProperty: {
        'fontSize': 'fontSize',
        'rotate': 'rotate'
      }
    },
  },
  variants: {
    extend: {
      display: ['group-hover', 'dark'],
      fill: ['dark'],
      opacity: ['group-hover'],
      fontSize: ['group-hover'],
      scale: ['group-hover'],
    },
  },
  plugins: [],
}
