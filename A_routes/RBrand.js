module.exports = (app) => {
    const brand = require('../A_controller/CBrand');
    const middleware = require('../A_Authenzation/Authen');

    // Get brand all
    app.get('/brand',middleware.AuthenToken,brand.GetBrandAll);
    // Get brand by id
    app.get('/brand/:BID',middleware.AuthenToken,brand.GetBrandById);
    // Create brand
    app.post('/brand',middleware.AuthenToken,brand.CreateBrand); 
    // Update brand
    app.put('/brand',middleware.AuthenToken,brand.UpdateBrand);
    // Delete brand
    app.delete('/brand/:BID',middleware.AuthenToken,brand.DeleteBrand);
}