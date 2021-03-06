const express = require('express')
const cors = require('cors')

const app = express()

const PORT = 8080
const HOST = "0.0.0.0"

const { json, urlencoded } = express

app.use(json())
app.use(urlencoded({ extended: false }))
const corsOptions = { origin: '*', optionsSuccessStatus: 200 }
app.use(cors(corsOptions))

app.get('/',(req,res)=>{
    res.send("Hello World")
})

app.listen(PORT,HOST, () => {console.log(`Server on port: ${PORT} and host ${HOST}` );})