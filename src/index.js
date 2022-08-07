const express = require('express');
const app = express();
require('./db/mongoose');
const Url = require('./models/urlModel');
const validUrl = require('valid-url');
const shortid = require('shortid');
const url = require('./routes/url');
const redirect = require('./routes/redirect');
const path = require('path');
const publicDirectoryPath = path.join(__dirname,'../public');
app.use(express.static(publicDirectoryPath));

const port = process.env.port || 3000;
app.use(express.json());
app.use(url);
app.use(redirect);

app.listen(port, () => {
    console.log('Server is up and runnning on port 3000');
});
