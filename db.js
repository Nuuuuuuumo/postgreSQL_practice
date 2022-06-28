const Pool = require("pg").Pool

const pool = new Pool({
    user: `${process.env.USER}`,
    password: `${process.env.PASSWORD}`,
    host: `${process.env.DB_URL}`,
    port: process.env.DB_PORT,
    database: `${process.env.DB_NAME}`
})

module.exports = pool

