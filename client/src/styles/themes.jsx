export const themes = Object.freeze({
  breakpoints: {
    mobile: '320px',
    tablet: '768px',
    desktop: '1280px',
  },
  colors: {
    black: '#343434',
    white: '#FFFFFF',
    yellow: '#f3cf00',

    accent: '#2374ef',
    hovered: '#1f68d7',

    background: '#f0f4f9',
    backgroundHoverd: '#f2f6fc',

    error: '#E74A3B',
    success: '#3CBC81',
    noValue: '#343434',

    border: '#c9c9c9',
    borderLight: '#d3dbe5',
    placeholder: '#5c5858',

    backdrop: 'rgba(23, 24, 32, 0.5)',
  },
  indents: {
    xxs: '3px',
    xs: '5px', //
    s: '10px', //
    m: '20px', //
    l: '35px',
    xl: '50px', //
    xxl: '100px',
  },
  fontSizes: {
    xxs: '10px',
    xs: '12px',
    s: '14px',
    m: '16px',
    l: '18px',
    xl: '20px',
    xxl: '24px',
  },
  fontWeight: {
    r: 400,
    m: 500,
    sb: 600,
    b: 700,
  },
  animations: {
    cubicBezier: 'cubic-bezier(0, 0.5, 1.3, 2)',
  },
  shadows: {
    auth: '0 3px 5px -1px rgb(0 0 0/20%), 0 6px 10px 0 rgb(0 0 0/14%), 0 1px 18px 0 rgb(0 0 0/12%)',
    button: '0 7px 6px 1px rgba(0,0,0,.16)',
    back: 'inset 1px 0 0 #dadce0, inset -1px 0 0 #dadce0, 0 1px 2px 0 rgba(60,64,67,.3), 0 1px 3px 1px rgba(60,64,67,.15)',
  },
});
