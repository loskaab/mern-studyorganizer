const multer = require('multer');

const { tempDir } = require('../utils');

const storage = multer.diskStorage({
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
  limits: { fileSize: 2048 },
  destination: tempDir,
});

const upload = multer({ storage });

module.exports = upload;
