/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./js/**/*.js"],
  theme: {
    extend: {
      colors: {
        'steel-blue': '#437CA5',
        'celestial-blue': '#549ED2',
        'gold': '#E7BB5F',
        'gold-light': '#F3D9A3',
        'gold-dark': '#B29251',
        'cmdf-black': '#07070A',
        'medium-gray': '#666666',
        'light-gray': '#f5f5f5',
        'dark-gray': '#07070A',
        'brand-steel': '#437CA5',
        'brand-celestial': '#549ED2',
        'lion': '#B29251'
      },
      fontFamily: {
        'sans': ['Roboto', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        'gilroy': ['Gilroy', 'Inter', 'system-ui', 'sans-serif'],
        'howards': ['Howards Eight', 'Georgia', 'Times New Roman', 'serif'],
        'hero': ['Elms Sans', 'sans-serif'],
        'display': ['Fredericka the Great', 'cursive'],
        'nav': ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px'
      },
      boxShadow: {
        'cmdf': '0 4px 6px -1px rgba(67, 124, 165, 0.1), 0 2px 4px -1px rgba(67, 124, 165, 0.06)',
        'cmdf-lg': '0 10px 15px -3px rgba(67, 124, 165, 0.1), 0 4px 6px -2px rgba(67, 124, 165, 0.05)'
      }
    }
  },
  plugins: []
}
