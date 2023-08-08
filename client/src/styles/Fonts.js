import WebFont from 'webfontloader';

const families = ['Roboto:400,700,900', 'Montserrat:400,700,900', 'IBM Plex Sans:400,700,900'];

const loadWebFonts = () => WebFont.load({ google: { families } });

export default loadWebFonts;
