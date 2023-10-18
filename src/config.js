require('dotenv').config();
module.exports= {
    app: {
        port: process.env.PORT ,
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE
    }
}