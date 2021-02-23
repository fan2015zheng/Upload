const multer = require("multer")

function fileFilter(req, file, cb) {
  if(file.mimetype === 'image/jpeg' ||
     file.mimetype === 'image/png') {
    cb(null, true)
    return
  }
  cb(new Error("Oops! File type is not allowed"), false)
}

function mwAddFile(req, res, next) {

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
  upload.single("filex")(req, res, (err)=>{
    if(err) {
      return res.json({ok:false, error: err.message})
    }
    next()
  })
}

module.exports = {
  mwAddFile
}