const jwt = require('jsonwebtoken')
const md5 = require('md5')

module.exports = {
    generateToken (data) { //生成token
        let created = Math.floor(Date.now() / 1000); //当前时间戳
        let token = jwt.sign({
            data,
            exp: created + 3600 * 24
        })
        return md5(token)
    }
}