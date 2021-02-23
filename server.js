const express = require("express")
require("dotenv/config")
const app = express()
const bodyPaser = require("body-parser")
const { asyNewFolder, asyRemoveFolder, asyResizeImage } = require("./Express/File")
const { mwAddFile } = require("./Express/Multer")

//const multer = require("multer")
//const upload = multer({dest:"./TempFolder/Hello2"})


app.use(bodyPaser.json())


app.post("/", mwAddFile, (req, res, next)=>{
  
  console.log(req.file)
  console.log(req.body.x)
  res.json({ok: true, info: "mwAddFile is successful"})
})

const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>{
  console.log("Upload listening at port "+PORT)
})
