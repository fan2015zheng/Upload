const express = require("express")
require("dotenv/config")
const app = express()
const { asyNewFolder, asyRemoveFolder, asyResizeImage } = require("./Express/File")


asyResizeImage("Hello","cait-sm.jpg","cait-bg.jpg",2000,2000)
 

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
  console.log("Upload listening at port "+PORT)
})
