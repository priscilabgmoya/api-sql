const { getConnection } = require('./connection.db');
const tableEmployee = "empleado", tableTypeOfEmployee = "tipo_empleado";
/**
 * sentencia que retorna datos de todos los empleados registrados en una base de datos SQL
 * @returns 
 */
module.exports.getEmployees = async function () {
    let conn;
    try {
        conn = await getConnection();
        const SQL = `SELECT  nombre, apellido, correo_electronico FROM ${tableEmployee}`;
        let rows = await conn.query(SQL);
        return rows;
    } catch (error) {
        console.log(error);
    }
}
/**
 * sentencia que retorna datos de un solo empleados registrados en una base de datos SQL
 * @returns 
 */
module.exports.getOneEmployee = async function (dni) {
    let conn;
    try {
        conn = await getConnection();
        const SQL = `SELECT  nombre, apellido, correo_electronico FROM ${tableEmployee} WHERE dni = ?`;
        let row = conn.query(SQL, [dni]);
        return row;
    } catch (error) {
        console.log(error);
    }
}
/**
 * sentencia que retorna datos de todos los empleados registrados en una base de datos uniendo dos tablas (
 * empleados y tipo de empleados) SQL
 * @returns 
 */
module.exports.getEmployeesTypeOfEmployee = async function () {
    let conn;
    try {
        conn = await getConnection();
        const SQL = `SELECT  nombre, apellido, t.descripcion as 'tipo_empleado' FROM ${tableEmployee} e JOIN ${tableTypeOfEmployee} t ON e.id_tipo_empleado = t.id_tipo_empleado`;
        let rows = conn.query(SQL); 
        return rows; 
    } catch (error) {
        console.log(error);
    }
}
/**
 * sentencia que retorna datos de un solo empleados registrados en una base de datos uniendo dos tablas (empleados y tipo de empleados)  SQL
 * @returns 
 */
module.exports.getOneEmployeeTypeOfEmployee = async function (dni) {
    let conn;
    try {
        conn = await getConnection();
        const SQL = `SELECT  nombre, apellido, t.descripcion as 'tipo_empleado' FROM ${tableEmployee} e JOIN ${tableTypeOfEmployee} t ON e.id_tipo_empleado = t.id_tipo_empleado WHERE dni = ?`;
        let row = conn.query(SQL, [dni]);
        return row;
    } catch (error) {
        console.log(error);
    }
}