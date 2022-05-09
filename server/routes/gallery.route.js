const router = require('express').Router();
const pool = require('../modules/pool')

router.get('/', (req,res)=>{
    console.log('/gallery GET')
    const queryString = `SELECT * FROM "gallery_items"`;
    pool.query(queryString).then((results)=>{
        res.send(results.rows);
    }).catch((err)=>{
        console.log(err);
        res.sendStatus(500);
    })
})

module.exports = router