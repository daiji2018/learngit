var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
var router = require('./router');

app.use(cors());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(router);
app.listen(5000, () => {
    console.log('http://127.0.0.1:5000');
})

