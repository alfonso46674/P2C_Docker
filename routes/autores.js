const router = require('express').Router()

router.get('/',(req,res)=>{
    res.json({
        autor1 : "Juan Pablo Ramos Robles",
        autor2: "Alfonso Ramirez Castro"
    })
})

module.exports = router