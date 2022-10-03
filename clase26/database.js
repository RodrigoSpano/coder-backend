const mongoose = require('mongoose');

const uri = process.env.URL_CONNECTION;
mongoose.connect(uri, () => console.log('db connnected'));
