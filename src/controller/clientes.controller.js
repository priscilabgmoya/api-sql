const {request, response} = require('express'); 
const responses = require('../helpers/response'); 
async function getClientes(req = request, res = response){
    responses.success(res,req,"hola mundo", 200)
   // res.status(200).json({msg: "hola mundo"})
}

module.exports = {
    getClientes
}