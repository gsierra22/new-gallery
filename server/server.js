//requires
const express = require ('express')
const app = express();

//uses

//globals
const port = 5000

app.list(port, ()=>{
    console.log('server:', port)
})