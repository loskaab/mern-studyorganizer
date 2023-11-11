import WebFont from 'webfontloader';

const families = [
  'Roboto:400,500,600,700',
  'Montserrat:400,500,700,900',
  'IBM Plex Sans:400,500,700',
];

export const loadWebFonts = () => WebFont.load({ google: { families } });
