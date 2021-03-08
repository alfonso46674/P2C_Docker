const router = require('express').Router()

router.post('/suma',(req,res)=>{
    let sum = 0; 
    //obtener el arreglo
    let numberArray = req.body.nums
    for(let i = 0; i < numberArray.length; i++){
        sum += numberArray[i]
    }

    res.json({
        respuesta : sum
    })
})

router.post('/resta',(req,res)=>{
    //obtener el arreglo
    let numberArray = req.body.nums
    //obtener el numero a restar
    let numberToSub= req.body.numToSubs

    for (let i = 0; i < numberArray.length; i++){
        numberArray[i] = numberArray[i] - numberToSub
    }

    res.json({
        respuesta : numberArray
    })
})

router.post('/multiplica',(req,res)=>{
        //obtener el arreglo
        let numberArray = req.body.nums
        //guardar el primer numero del arreglo y asignarlo a una variable para que este inicializada diferente a 0
        let multiplication = req.body.nums[0]; 

        for(let i = 1; i < numberArray.length; i++){
            multiplication *= numberArray[i]
        }

        res.json({
            respuesta : multiplication
        })
})

router.post('/divide',(req,res)=>{
    //obtener arreglo
    let numberArray = req.body.nums
    //obtener numero a dividir
    let numberToDiv= req.body.numToDiv

    for (let i = 0; i < numberArray.length; i++){
        numberArray[i] = numberArray[i] / numberToDiv
    }

    res.json({
        respuesta : numberArray
    })
})

router.post('/free',(req,res)=>{
    //obtener string de operacion
    let operation  =req.body.operation

    //eval() evalua un string con operaciones aritmeticas y retorna un resultado
    let result = eval(operation)

    res.json({
        respuesta: result
    })
})

module.exports = router