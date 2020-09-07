const pg = require('pg')

const dbconection = new pg.Client({
user:'postgres',
host: 'localhost',
database:'eventos',
password:'postgres',
port:'5432',
})


module.exports = dbconection;