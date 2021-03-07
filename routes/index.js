const router = require('express').Router()

const autoresRoute = require("./autores")
const operacionesRoute = require("./operaciones")

router.use('/autores', autoresRoute)

router.get('/',(req,res)=>{
    res.json({
        paths:[
            {get :"/autores"},
            {post: ["/suma", "/resta", "/multiplica", "/divide", "Free"]}
        ]
    })
})

module.exports = router