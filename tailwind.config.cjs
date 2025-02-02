const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    fontFamily: {
      'semibold': ['Suisse SemiBold', 'sans-serif'],
      'normal': ['Suisse Regular', 'sans-serif']
    },
    fontSize: {
      xxs: '0.625rem',
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      xl: '1.25rem',
      '1.5xl': '1.5rem',
      '2xl': '1.625rem',
      '3xl': '1.75rem',
      '3.25xl': '2rem',
      '3.5xl': '2.5rem',
      '4xl': '2.625rem',
      '4.5xl': '3rem',
      '5xl': '4.5rem',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '2rem',
      },
    },
    extend: {
      colors: {
        // Accent (Orange)
        a: {
          // Light (Orange Tint)
          2: '#FFE7B8',
          // Medium (Orange)
          5: '#FFD789',
          // Dark (Hot Orange)
          8: '#FFB321',
        },
        // Secondary (Green)
        s: {
          // Light (Green Tint)
          2: '#E5F5C2',
          // Medium (Green)
          5: '#D5EF9A',
          // Dark (Hot Green)
          8: '#80EA2E',
        },
        // Tertiary (Red)
        t: {
          // Light (Red Tint)
          2: '#F9CED5',
          // Medium (Red)
          5: '#F5ADBA',
          // Dark (Hot Red)
          8: '#FF5170',
        },
        // Quaternary (Blue)
        q: {
          // Light (Blue Tint)
          2: '#CCF1FF',
          // Medium (Blue)
          5: '#AFE7FF',
          // Dark (Hot Blue)
          8: '#27BEFF',
        },
        // Neutral Light
        nl: {
          0: '#FFFFFF',
          2: '#77748C',
          5: '#4E4C5C',
        },
        // Neutral Dark
        nd: {
          2: '#323241',
          5: '#282834',
          8: '#1E1E27',
          9: '#14141A',
        },
      },
      opacity: {
        8: '.08',
        15: '.15',
        20: '.20',
        40: '.40',
        35: '.35',
        60: '.60',
        65: '.65',
        80: '.80',
        85: '.85',
        90: '.90',
        97: '.97',
      },
      letterSpacing: {
        '-0.01': '-0.01em',
        '-0.005': '-0.005em',
        0.01: '0.01em',
        0.02: '0.02em',
        0.04: '0.04em',
        0.08: '0.08em',
        0.1: '0.1em',
        0.12: '0.12em',
      },
      lineHeight: {
        120: '1.2',
      },
      borderRadius: {
        xl: '0.625rem', // or 10px
        '2xl': '0.75rem', // or 12px
        '3xl': '1rem', // or 16px
      },
    },
  },

  plugins: [],
};

module.exports = config;
