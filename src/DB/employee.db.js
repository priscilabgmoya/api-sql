const { getConnection } = require('./connection.db');
const tableEmployee = "empleado"; 
module.exports.getEmployees = async function() {
 let conn;
    try {
        conn = await getConnection(); 
        const SQL = `SELECT  nombre, apellido, correo_electronico FROM ${tableEmployee}`
        let rows = await conn.query(SQL); 
        return rows; 
    } catch (error) {
        console.log(error);
    }
}
module.exports.getOneEmployee = async function(dni) {
    let conn 
    try {
        conn = await getConnection(); 
        const SQL =  `SELECT  nombre, apellido, correo_electronico FROM ${tableEmployee} WHERE dni = ?`;
        let row = conn.query(SQL, [dni]); 
        return row;
    } catch (error) {
        console.log(error);
    }
}