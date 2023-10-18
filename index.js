const app = require("./src/app");

app.listen(app.get("PORT"), ()=> {
    console.log(`Server in PORT ${app.get("PORT")}`);
});