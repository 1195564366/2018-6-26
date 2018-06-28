const query = require('../db')
const express = require('express')
const mysql = require('mysql')
const svgCaptcha = require('svg-captcha')
const router = express.Router()
const tip = require('../util/tip')
const async = require('async')

router.get('/captcha', (req, res) => {
    let captcha = svgCaptcha.createMathExpr();
    req.session.captcha = captcha.text;
    res.send(captcha.data)
})

router.post('/', (req, res) => {
    if (req.session.captcha !== req.body.captcha) {
        res.send(tip[1001])
    } else {
        async.auto({
            func1: (cb) => {
                let sql = `select count(1) as total from boss where account = ${mysql.escape(req.body.account)} and password = ${mysql.escape(req.body.password)}`
                query(sql).then(data => {
                    if (data[0].total === 0) {
                        res.send(tip[1002])
                    } else {
                        cb(null)
                    }
                })
            },
            func2: ['func1', (result, cb) => {
                let sql = `select nick_name from boss where account = ${mysql.escape(req.body.account)} and password = ${mysql.escape(req.body.password)}`
                query(sql).then(data => {
                    res.send({code: 200, msg: '登陆成功', nick_name: data[0].nick_name})
                })
            }]
        })
    }
})

module.exports = router