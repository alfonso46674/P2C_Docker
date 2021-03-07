const router = require('express').Router()

router.post('/suma',(req,res)=>{
    let sum = 0; 
    let numberArray = req.body.nums
    for(let i = 0; i < numberArray.length; i++){
        sum += numberArray[i]
    }

    res.json({
        result : sum
    })
})
router.post('/resta',(req,res)=>{

})
router.post('/multiplica',(req,res)=>{

})
router.post('/divide',(req,res)=>{

})
router.post('/free',(req,res)=>{

})

module.exports = router