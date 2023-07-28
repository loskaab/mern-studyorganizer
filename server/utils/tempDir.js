const path = require('path');
require('dotenv').config();

const tempDir = path.join(process.cwd(), 'temp');

module.exports = tempDir;
