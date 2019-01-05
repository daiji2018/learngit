const Koa = require('koa');
const app = new Koa();
const cors = require('koa2-cors');
const bodyParser = require('koa-bodyparser');
const static = require('koa-static');
const router = require('./router');
const path = require('path');

app.use(cors());
app.use(bodyParser());
app.use(router.routes());

app.listen(5000, () => {
    console.log('http://127.0.0.1:5000');
})