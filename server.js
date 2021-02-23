const express = require("express")
require("dotenv/config")
const app = express()
const bodyPaser = require("body-parser")
const { asyNewFolder, asyRemoveFolder, asyResizeImage } = require("./Express/File")
const { mwAddFile } = require("./Express/Multer")

const buildFolder = `${__dirname}/_React/build`
app.use(express.static(buildFolder))
app.use(express.static(`${__dirname}/Express/TempFolder`))

app.use((req, res, next)=>{
  //for development run time
  if(req.headers.origin === 'http://localhost:3000') {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
    
    //Since we cannot set cookie across localhost different ports, there is no need to receive cookies cross domain
    //res.header('Access-Control-Allow-Credentials', 'true')
  }
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
    return res.end()
  }
  next()
})

app.use(bodyPaser.json())

app.post("/", mwAddFile, (req, res, next)=>{
  
  res.json({ok: true, newFileName: req.newFileName})
})

const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>{
  console.log("Upload listening at port "+PORT)
})
