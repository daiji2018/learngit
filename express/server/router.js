var express = require('express');
var render = express.Router();
var fn = require('./router-fn')

render.get('/api/gethero', fn.gethero);

render.get('/api/getheroId', fn.getheroId);

render.post('/api/updatehero', fn.updatehero);

render.get('/api/delhero', fn.delhero);

render.post('/api/insdatehero', fn.insdatehero);

module.exports = render;