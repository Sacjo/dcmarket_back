const {Client} = require('pg')

const client = new Client({
    host: "18.117.72.100", //18.117.72.100
    user: "postgres",
    port: 5432,
    password: "devx",
    database: "dcmarket"
})

module.exports = client