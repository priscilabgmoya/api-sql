const connection = require('./connection.db');
const tableEmployee = "empleado"; 
module.exports.getClientes = async function() {
 let conn;
    try {
        conn = await connection.getConnection(); 
        const SQL = `SELECT  nombre, apellido, correo_electronico FROM ${tableEmployee}`
        let rows = await conn.query(SQL); 
        return rows; 
    } catch (error) {
        console.log(error);
    }
}