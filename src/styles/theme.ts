import { colors } from './colors';

export const theme = {
  grid: {
    container: '114.4rem',
    gutter: '3.2rem'
  },
  border: {
    radius: {
      small: '0.4rem',
      medium: '0.6rem',
      large: '0.8rem'
    }
  },
  font: {
    family: "'Nunito', 'sans-serif', 'Arial'",
    light: 300,
    normal: 400,
    bold: 700,
    sizes: {
      xxsmall: '1.2rem',
      xsmall: '1.4rem',
      small: '1.6rem',
      medium: '1.8rem',
      large: '2.0rem',
      xlarge: '2.8rem',
      xxlarge: '3.2rem',
      huge: '4.8rem',
      xhuge: '5.2rem'
    },
    style: {
      normal: 'normal',
      italic: 'italic',
      oblique: 'oblique'
    }
  },
  colors,
  sizes: {
    small: '27.8rem',
    medium: '55.7rem',
    large: '114.4rem'
  },
  spacings: {
    minimal: '0.4rem',
    xxsmall: '0.8rem',
    xsmall: '1.2rem',
    small: '1.6rem',
    medium: '2rem',
    large: '2.4rem',
    xlarge: '2.8rem',
    xxlarge: '3.2rem',
    huge: '3.6rem',
    xhuge: '4.0rem',
    xxhuge: '4.4rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  }
};
