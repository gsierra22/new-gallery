const router = require('express').Router();

router.get('/', (req,res)=>{
    console.log('/gallery GET')
    res.send('email config')
})

module.exports = router