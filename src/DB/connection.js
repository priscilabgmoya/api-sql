import mysql from 'promise-mysql';
import config from '../config';


const pool = mysql.createConnection({
    host: config.app.host         , 
    user: config.app.user        , 
    password: config.app.password     ,
    database: config.app.database     ,
    connectionLimit: 5,
});


const getConnection = ()=>{
    return pool;
}
module.exports = {
    getConnection
};