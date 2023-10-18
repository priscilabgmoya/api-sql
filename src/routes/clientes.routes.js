const {Router} = require ('express');
const { getClientes } = require('../controller/clientes.controller');

const router = Router();

router.get("/api/v1/getCliente", getClientes);


module.exports = router; 