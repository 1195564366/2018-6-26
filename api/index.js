const express = require('express')
const app = express()
const mysql = require('mysql')
const query = require('./db')
const cookieParser = require('cookie-parser');
const session = require('express-session')
const bodyParser = require('body-parser')
const routers = require('./router')

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://192.168.1.90:8080');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials','true');
    next();
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser('sessiontest'));

app.use(session({
    secret: 'sessiontest',//与cookieParser中的一致
    resave: true,
    saveUninitialized:true
}))

routers(app)

app.listen(8008, () => {
    console.log('站点开启')
});