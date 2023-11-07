import multer from "multer";

const storage = multer.diskStorage({
    destination: "uploads",

    filename: function (req, file, cb){
        // cb(null, `image-${Date.now()}.${file.originalname}`)
        cb(null, `image-${Date.now()}.${file.originalname}`);
    },
});

const filefilter = (req, file, cb) => {    
    if (
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/jpeg"
    ) {
      cb(null, true);
    }else{
      cb(null, false)
  
    }
  };

const upload = multer({
    storage: storage,
    fileFilter: filefilter,
    // size:{
    //     maxFileSizeInMB: "1mb"
    // },
})

export default upload;