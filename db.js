const mysql = require ("mysql");
const connection = mysql.createConnection({
    host     : '35.198.60.119',
    user     : 'local',
    password : '',
    database : 'SGA'
  });

module.exports = {
    connection
}