const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')
const multer = require('multer')
const helmet = require('helmet')
const morgan = require('morgan')
const path = require('path')
const { fileURLToPath } = require('url')
const { register } = require('./controllers/auth')

dotenv.config()
const app = express()
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}))
app.use(morgan("common"))
app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))
app.use(cors())
app.use(express.static('public'));

//File Storage//
const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,"public");
    },
    filename: function(req,file,cb){
        cb(null,file.originalname)
    }
})
const upload = multer({storage})

//DB setup//
const port = process.env.PORT
mongoose.connect(process.env.MONG_URL,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=> {
        app.listen(port,()=>{
        console.log(`app is running on localhost ${port}`)
        }) 
    })
    .catch((error)=>console.log(`${error} did not connect`))