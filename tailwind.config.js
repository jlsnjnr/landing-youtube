module.exports = {
  content: ["./src/**/*.{tsx,svg}"],
  theme: {
    extend: {
      colors: {
        'primary': '#1D1D1D;',
        'secondary': '#464646',
        'blue-btn': '#377DFF',
        'orange-bg': '#FF2D2D',
        'green-bg': '#7CE761',
        'yellow-bg': '#FFA800',
        'footer-bg': '#383638'
      },
      fontFamily: {
        'nunito': ['Nunito'],
        'quicksand': ['Quicksand'],
      },
      dropShadow: {
        '3xl': '0px 4px 8px rgba(55, 125, 255, 0.5)',
        'strong': '4px 4px 30px rgba(0, 0, 0, 0.1)'
      }
      
    },
  },
  plugins: [],
}