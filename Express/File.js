const fs = require("fs").promises
const path = require("path")
const sharp = require("sharp")

async function asyNewFolder(folder) {
  try {

    const pa = path.join(__dirname,"TempFolder", folder)
    await fs.rmdir(pa, {recursive: true})
    await fs.mkdir(pa)
    return true
  } catch (err) {
    console.log(err.message)
    return false
  }
}

async function asyRemoveFolder(folder) {
  try {
    const pa = path.join(__dirname,"TempFolder", folder)
    await fs.rmdir(pa, {recursive: true})
    return true
  } catch (err) {
    console.log(err.message)
    return false
  }
}

async function asyResizeImage(folder,fileName, newFileName,x,y) {
  try {
    const pa1 = path.join(__dirname,"TempFolder", folder, fileName)
    const pa2 = path.join(__dirname,"TempFolder", folder, newFileName)
    await sharp(pa1).rotate().resize(x,y).toFile(pa2)
    return true
  } catch (err) {
    console.log(err.message)
    return false
  }
}

module.exports = {
  asyNewFolder,
  asyRemoveFolder,
  asyResizeImage
}