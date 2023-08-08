const fs = require('fs/promises');

const cloudinary = require('cloudinary').v2;

const { HttpError } = require('./HttpError');

const { APP_NAME, CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } = process.env;

cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
  secure: true,
});

const options = {
  folder: `${APP_NAME}/Avatars`,
  use_filename: true,
  unique_filename: true,
  overwrite: true,
  transformation: [{ width: 250, height: 250, gravity: 'faces', crop: 'fill' }, { radius: 'max' }],
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
    // eslint-disable-next-line no-console
    console.error(error.message);
  }
};

module.exports = { upload, destroy };
