const path = require('path');

const multer = require('multer');

const tempDir = path.join(process.cwd(), 'temp');

const storage = multer.diskStorage({
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
  limits: { fileSize: 2048 },
  destination: tempDir,
});

const upload = multer({ storage });

module.exports = upload;
