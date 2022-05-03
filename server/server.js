//requires
const express = require ('express')
const app = express();
const gallery = require ('./routes/gallery.route')

//uses
app.use('/gallery',gallery)

//globals
const port = 5000

app.listen(port, ()=>{
    console.log('server:', port)
})