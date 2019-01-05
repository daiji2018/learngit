var connection = require('./config');
var moment = require('moment');

var gethero = (req, res) => {
    var sqlstr = 'SELECT * FROM heros WHERE isdel = 0'
    connection.query(sqlstr, function (error, results, fields) {
        if (error) return res.json({
            err_code: 1,
            message: '查询数据失败'
        })
        res.json({
            err_code: 0,
            message: results
        })
    });
}

var getheroId = (req, res) => {
    var sqlstr = 'SELECT * FROM heros WHERE id = ?'
    connection.query(sqlstr, [req.query.id], function (error, results, fields) {
        if (error) return res.json({
            err_code: 1,
            message: '查询数据失败'
        })
        res.json({
            err_code: 0,
            message: results
        })
    });
}

var updatehero = (req, res) => {
    var sqlstr = 'UPDATE heros set ? WHERE id=?';
    connection.query(sqlstr, [req.body, req.body.id], function (error, results, fields) {
        if (error) return res.json({
            err_code: 1,
            message: '更新英雄失败',
            affectedRows: 0
        })
        if (results.affectedRows !== 1) return results.json({
            err_code: 1,
            message: '更新的英雄不存在！',
            affectedRows: 0
        })
        res.json({
            err_code: 0,
            message: '更新成功！',
            affectedRows: results.affectedRows
        })
    });
}

var delhero = (req, res) => {
    var sqlstr = 'UPDATE heros SET isdel=1 WHERE id=?'
    connection.query(sqlstr, [req.query.id], function (error, results, fields) {
        if (error) return res.json({
            err_code: 1,
            message: '删除失败',
            affectedRows: 0
        })
        res.json({
            err_code: 0,
            message: '删除成功！',
            affectedRows: 1
        })
    });
}

var insdatehero = (req, res) => {
    var body = req.body;
    console.log(body);
    body.ctime = moment().format('YYYY-MM-DD HH:mm:ss');
    var sqlstr = 'INSERT INTO heros set ?';
    connection.query(sqlstr, [body], function (error, results, fields) {
        if (error) return res.json({
            err_code: 1,
            message: '增加英雄失败',
            affectedRows: 0
        })
        res.json({
            err_code: 0,
            message: '增加英雄成功！',
            affectedRows: results.affectedRows
        })
    });
}

module.exports = {
    gethero,
    getheroId,
    updatehero,
    delhero,
    insdatehero
}