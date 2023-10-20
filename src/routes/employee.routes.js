const {Router} = require ('express');
const { getEmployee, getOneEmployee } = require('../controller/employee.controller');

const router = Router();

router.get("/api/v1/getEmployee", getEmployee);
router.get("/api/v1/getOneEmployee/:dni", getOneEmployee); 


module.exports = router; 