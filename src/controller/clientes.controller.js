const {request, response} = require('express'); 
const responses = require('../helpers/response'); 
const db = require('../DB/index');

async function getClientes(req = request, res = response){
    const employee =  await  db.clientes.getClientes();
    if(!employee) return responses.error(res,req,"ERROR NO SE ENCONTRO INFORMACION DE TABLA", 404);
    responses.success(res,req,employee, 200); 
}

module.exports = {
    getClientes
}