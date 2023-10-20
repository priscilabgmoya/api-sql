const {request, response} = require('express'); 
const {error , success} = require('../helpers/response'); 
const db = require('../DB/index');
const { parseDNI } = require('../helpers/helpParse');

async function getEmployee(req = request, res = response){
    const employee =  await  db.employee.getEmployees();
    if(!employee) return error(res,req,"ERROR NO SE ENCONTRO INFORMACION DE TABLA", 404);
    success(res,req,employee, 200); 
}

async function getOneEmployee(req = request, res = response){
    const dniParse = parseDNI(res, req); 
    const employee = await db.employee.getOneEmployee(dniParse); 
    if(employee.length == 0) return error(res, req, "Empleado no encontrado", 404); 
    success(res,req,employee, 200);
}

module.exports = {
    getEmployee,
    getOneEmployee
}