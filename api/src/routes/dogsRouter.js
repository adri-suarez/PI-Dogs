const { Router } = require('express');

const dogsRouter = Router()

dogsRouter.get('/',(req,res)=>{
    res.send("HOLA BUENAS BIENVENIDO A DOGS")
})

module.exports = dogsRouter