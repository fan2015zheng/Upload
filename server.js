const express = require("express")
require("dotenv/config")
const app = express()
const bodyPaser = require("body-parser")
const { asyNewFolder, asyRemoveFolder, asyResizeImage } = require("./Express/File")
const { mwAddFile } = require("./Express/Multer")

app.use(bodyPaser.json())

app.post("/", mwAddFile, (req, res, next)=>{
  
  res.json({ok: true, file: req.file})
})

const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>{
  console.log("Upload listening at port "+PORT)
})
