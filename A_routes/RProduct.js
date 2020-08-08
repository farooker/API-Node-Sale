module.exports = (app) => {
    const product = require('../A_controller/CProduct');
    const upload = require('../A_controller/CUploader');
    // Get product all
    app.get('/product', product.GetProductAll);
    // Get product by id
    app.get('/product/:PID',product.GetProductById);
    // Create product
    app.post('/product',upload.single('file'),function(req, res, next) {
       if(!req.file) {
        return{ status : true, result : next(err) };
      }
      const data = {
                    ItemId    : req.body.Itemid,
                    ItemName : req.body.Itemname,
                    ItemPrice : req.body.Itemprice,
                    ItemBid : req.body.Itembid,
                    imgPath : 'images/' + req.file.filename,
              }
       product.CreateProduct(data,res);
    })
    // Update product
    app.put('/proudct',upload.single('file'),function(req, res, next) {
        const data= [];
        if(!req.file) {
                data.push({
                            ItemId    : req.body.Itemid,
                            ItemName  : req.body.Itemname,
                            ItemPrice : req.body.Itemprice,
                            ItemBid   : req.body.Itembid,
                            imgPath   : req.body.Beforefile,
                          });
          }
          else{
                data.push({
                      ItemId    : req.body.Itemid,
                      ItemName  : req.body.Itemname,
                      ItemPrice : req.body.Itemprice,
                      ItemBid   : req.body.Itembid,
                      imgPath   : 'images/' + req.file.filename,
                });
          }
          product.UpdateProduct(data,res);
      //  res.json(data);
   })
    // Delete product
    app.delete('/product/:PID',product.DeleteProduct);
 
}