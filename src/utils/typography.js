import Typography from 'typography';

const typography = new Typography({
  headerFontFamily: ['Signika', 'sans-serif'],
  bodyFontFamily: ['Signika', 'sans-serif'],
  googleFonts: [
    {
      name: 'Signika',
      styles: ['700', '400'],
    },
  ],
  baseFontSize: '18px',
  headerWeight: 700,
  bodyWeight: 400,
  baseLineHeight: 1.4,
  scaleRatio: 4,
  blockMarginTop: 0,
  blockMarginBottom: '1rem',
});

export default typography;
