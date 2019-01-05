var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, './views')));
app.use('/node_modules', express.static(path.join(__dirname, '../node_modules')));

app.listen(4000, () => {
    console.log('http://127.0.0.1:4000');
})