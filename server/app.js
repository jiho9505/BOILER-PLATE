const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');

// const config = require('./config/config');
// const errorHandler = require('./middlewares/error-handler');
// const router = require('./routes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use('/api', router);

// app.use(errorHandler);

app.use(express.static(path.resolve(__dirname, '../client', 'build')));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'));
});

// const env = process.env.NODE_ENV || 'local';
const port = 5000;

app.listen(port, () => {
  console.log(`Server Listening on ${port}`);
});
