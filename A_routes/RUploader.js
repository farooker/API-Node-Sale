module.exports = (app) => {
    const upload = require('../A_controller/CUploader');

    // Uploading Image product
    app.post('/UploadProduct',upload.single('file'),function(req, res, next) {
     /// console.log(req.file);
      if(!req.file) {
         res.status(500);
         return next(err);
      }
      res.json({ fileUrl: 'http://192.168.0.7:3000/images/' + req.file.filename });
    }); 

 
}