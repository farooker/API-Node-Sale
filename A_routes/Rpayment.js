module.exports = (app) => {
    const OmisePayment = require('../A_controller/CPayment');



    // Payment by Cradit card
     app.post('/OmiseCredirCard',OmisePayment.OmiseCreditCard); 

    // Payment by internet banking
    app.post('/OmiseInternetBanking',OmisePayment.OmiseInternetBanking);

    // Payment Hook
    app.post('/paymentHook',OmisePayment.OmiseInternetBankingHook)
  // app.post('/brand',middleware.AuthenToken,brand.CreateBrand); 

}