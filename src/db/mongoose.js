const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/url_shortener',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});