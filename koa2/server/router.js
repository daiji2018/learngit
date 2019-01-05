const router = require('koa-router')();
const mysql = require('mysql2');
var Sequelize = require("Sequelize");

const sequelize = new Sequelize('mydb', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 0,
        idle: 30000
    },
    operatorsAliases: false
});

var hero = sequelize.define('hero', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: Sequelize.STRING(10),
    gender: Sequelize.STRING(10),
    ctime: Sequelize.STRING(50),
    isdel: Sequelize.BIGINT,
}, {
    timestamps: false
});


var fn = (async (ctx, next) => {
    var heros = await hero.findAll({
        where: {
            isdel: 0
        }
    });
    ctx.body = {
        err_code: 0,
        message: heros
    }
});
router.get('/api/gethero', fn)

module.exports = router;