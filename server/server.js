const mongoose = require('mongoose');

const app = require('./app');

const { PORT = 3001, DB_NAME, DB_USER, DB_PATH, DB_PASS } = process.env;
const DB_HOST =
  `mongodb+srv://${DB_USER}:${DB_PASS}` +
  `@cluster0.${DB_PATH}.mongodb.net/` +
  `${DB_NAME}?retryWrites=true&w=majority`;

const OPTIONS = { useNewUrlParser: true, useUnifiedTopology: true };
const connectDB = (uri, options = OPTIONS) => mongoose.connect(uri, options);

(async () => {
  try {
    await connectDB(DB_HOST);
    console.log('Database connection established');
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (error) {
    console.log(error.message);
  }
})();

// mongoose
//   .connect(DB_HOST)
//   .then(app.listen(PORT, () => console.log(`Server started on port ${PORT}`)))
//   .catch(err => console.log(err));
