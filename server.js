const express = require("express")
require("dotenv/config")
const app = express()
const { asyNewFolder, asyRemoveFolder, asyResizeImage } = require("./Express/File")


asyNewFolder("Hello")  

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
  console.log("Upload listening at port "+PORT)
})
