const multer = require("multer")

function mwAddFile(req, res, next) {

  const upload = multer({dest:"Express/TempFolder/Hello2"})
  upload.single("filex")(req, res, (err)=>{
    if(err) {
      return res.json({ok:false, error: err.message})
    }
    console.log("call back")
    next()
  })
}

module.exports = {
  mwAddFile
}