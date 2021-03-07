const router = require('express').Router()

router.post('/suma',(req,res)=>{
    let sum = 0; 
    let numberArray = req.body.nums
    for(let i = 0; i < numberArray.length; i++){
        sum += numberArray[i]
    }

    res.json({
        respuesta : sum
    })
})

router.post('/resta',(req,res)=>{
    let numberArray = req.body.nums
    let numberToSub= req.body.numToSub

    for (let i = 0; i < numberArray.length; i++){
        numberArray[i] = numberArray[i] - numberToSub
    }

    res.json({
        respuesta : numberArray
    })
})

router.post('/multiplica',(req,res)=>{
        let numberArray = req.body.nums
        let multiplication = req.body.nums[0]; 

        for(let i = 1; i < numberArray.length; i++){
            multiplication *= numberArray[i]
        }

        res.json({
            respuesta : multiplication
        })
})

router.post('/divide',(req,res)=>{
    let numberArray = req.body.nums
    let numberToDiv= req.body.numToDiv

    for (let i = 0; i < numberArray.length; i++){
        numberArray[i] = numberArray[i] / numberToDiv
    }

    res.json({
        respuesta : numberArray
    })
})

router.post('/free',(req,res)=>{
    let operation  =req.body.operation

    let result = eval(operation)

    res.json({
        respuesta: result
    })
})

module.exports = router