const {Router} = require ('express');
const { getEmployee, getOneEmployee, getEmployeeTypeOfEmployee, getOneEmployeeTypeOfEmployee } = require('../controller/employee.controller');

const router = Router();

router.get("/api/v1/getEmployee", getEmployee);
router.get("/api/v1/getOneEmployee/:dni", getOneEmployee); 
router.get("/api/v1/employeeTypeOfEmployee", getEmployeeTypeOfEmployee);
router.get("/api/v1/getOneEmployeeTypeOfEmployee/:dni", getOneEmployeeTypeOfEmployee); 
module.exports = router; 