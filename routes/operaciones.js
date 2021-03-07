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
        let numberArray = req.body.nums
        let multiplication = req.body.nums[0]; 

        for(let i = 1; i < numberArray.length; i++){
            multiplication *= numberArray[i]
        }

        res.json({
            result : multiplication
        })
})

router.post('/divide',(req,res)=>{

})

router.post('/free',(req,res)=>{

})

module.exports = router