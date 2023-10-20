const { error } = require("./response")
const ExpRegSoloNumeros="^[0-9]+$";
exports.parseDNI = function(res, req){
    const {dni} = req.params; 
    if(!dni || dni.match(ExpRegSoloNumeros) == null ) return error(res, req, "Ingrese un numero valido" , 400); 
    return parseInt(dni); 
}