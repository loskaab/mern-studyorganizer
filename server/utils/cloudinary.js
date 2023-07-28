const cloudinary = require('cloudinary').v2;
const fs = require('fs/promises');

const { HttpError } = require('./HttpError');

const { CLOUD_NAME, API_KEY, API_SECRET } = process.env;

cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: API_KEY,
  api_secret: API_SECRET,
  secure: true,
});

const options = {
  folder: 'MERN/Avatars',
  use_filename: true,
  unique_filename: true,
  overwrite: true,
  transformation: [{ width: 250, height: 250, gravity: 'faces', crop: 'lfill' }, { radius: 'max' }],
};

const upload = async imagePath => {
  try {
    const image = await cloudinary.uploader.upload(imagePath, options);
    await fs.unlink(imagePath);
    return image;
  } catch (error) {
    throw new HttpError(404, error.message);
  }
};

const destroy = async avatarId => {
  try {
    return await cloudinary.uploader.destroy(avatarId);
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = { upload, destroy };
