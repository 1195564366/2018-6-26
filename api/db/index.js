const mysql = require('mysql')  //引入mysql npm包
const config = require('../configs')    //引入数据库配置

const pool = mysql.createPool(config)

const query = (sql, options, cb) => {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, coon) => {
            if (err) {
                reject(err)
            } else {
                coon.query(sql, options, (err, results) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(results)
                    }
                    coon.release()
                })
            }
        })
    })
}

module.exports = query