const Pool = require("pg").Pool;

const pool = new Pool({
    user:"postgres",
    password:"tomhardy46.",
    database:"todo_database",
    host:"localhost",
    post: 5432
})

module.exports = pool;