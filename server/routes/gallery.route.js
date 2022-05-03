const router = require('express').Router();

router.get('/', (req,res)=>{
    console.log('/gallery GET')
    res.send('test')
})

module.exports = router