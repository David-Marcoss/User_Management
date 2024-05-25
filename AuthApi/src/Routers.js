const UserRouter = require("./apps/Users/Router")
const auth = require("./middlewares/auth")
const express = require('express')

const Routers = app =>{

    app.use(
        UserRouter,
        express.Router().get('/tokenValid', auth, (req,res) => res.status(200).send(true))
    )
}



module.exports = Routers