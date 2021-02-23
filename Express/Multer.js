const multer = require("multer")
const {asyNewFolder, asyResizeImage} = require("./File")

function fileFilter(req, file, cb) {
  if(file.mimetype === 'image/jpeg' ||
     file.mimetype === 'image/png') {
    cb(null, true)
    return
  }
  cb(new Error("Oops! File type is not allowed"), false)
}

async function mwAddFile(req, res, next) {

  await asyNewFolder("Hello2")

  const storage = multer.diskStorage({

    destination: function(req, file, cb) {
      cb(null, "Express/TempFolder/Hello2")
    },
    filename: function(req, file, cb) {
      cb(null, file.originalname)
    }
  })

  const upload = multer({
    storage: storage, 
    limits: {
      fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
  })
  upload.single("file")(req, res, async (err)=>{
    if(err) {
      return res.json({ok:false, error: err.message})
    }
    const name = req.file.originalname.split(".")[0]
    const ext = req.file.originalname.split(".")[1]

    await asyResizeImage("Hello2", req.file.originalname, name+"-sm."+ext, 200, 200)
    req.newFileName =  name+"-sm."+ext
    next()
  })
}

module.exports = {
  mwAddFile
}