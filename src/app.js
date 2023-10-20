const express = require("express");
const config = require("./config");
const morgan = require("morgan"); 
const ruotes = require("./routes/index")
const app = express(); 

app.use(morgan("dev")); 
app.use(express.json());
app.use(express.urlencoded({extended: true})); 
app.use(ruotes.employee)
app.set("PORT",config.app.port);


module.exports = app;