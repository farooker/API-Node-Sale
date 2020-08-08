module.exports = (app) => {
    const OrderPayment = require('../A_controller/COrderPay');



    // Get order is payment
     app.get('/orderPayment',OrderPayment.GetBrandAll); 


}