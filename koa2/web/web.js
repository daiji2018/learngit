const Koa = require('koa');
const app = new Koa();
const static = require('koa-static');
const path = require('path');
app.use(static(
    path.join(__dirname, '../node_modules')
));
app.use(static(
    path.join(__dirname, '../web')
));

app.listen(4000, () => {
    console.log('http://127.0.0.1:4000');
})