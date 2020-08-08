require('dotenv').config();
const SQL = require('../A_query/S_order'); 
const API = require('../A_model/model');

var omise = require('omise')({
  'publicKey': process.env.OMISE_PUBLIC_KEY,
  'secretKey': process.env.OMISE_SECRET_KEY,
});

exports.OmiseCreditCard =async (req, res) => {
    
    const { email,name,id,token,cart,amount,current,order  } = req.body;

            const customer = await omise.customers.create({
                email,
                description: name,
                card: token
            });
        
            const charge = await omise.charges.create({
                amount: amount,
                currency: "thb",
                customer: customer.id
            });
    


         if(charge.status==='successful')
         {
    
             let item ={
                     status  :charge.status,
                       order : {
                                 id    : order ,
                                 date  : current,
                                 total :  (charge.amount / 100),
                                 user  :  id,
                                 transaction : charge.transaction
                                },
                     orderlist : cart        

                       }
                 cart.map(async row =>
                        {
                               let i=  await API.Model(SQL.QueryOrderlistAdd(row,order));
                                switch (i.status) {
                                    case false:
                                        console.log('add sucesss');
                                        break;
                                    default:
                                            console.log('flasedes');
                                        break;
                                }
                        })
                 
               let respone =    await API.Model(SQL.QueryOrderAdd(item));
               res.json(respone );
          }else{
            res.json({
                status : true, result :'Payemnt is not sucess.'
              });
           
          }
};

exports.OmiseInternetBanking =async (req, res) => {
  
    const { email,name,id,token,cart,amount,current,order  } = req.body;
    const jsonArray = {
                  email   :  email, 
                  name    :  name, 
                  id      :  id, 
                  token   :  token,
                  cart    :  cart,
                  current :  current,
                  order   :  order,  
                  amount  :  amount, 
          }
   
     const charge = await omise.charges.create({
              amount,
              source: token,
              currency: "thb",
              return_uri: "http://localhost:3000/cart/sucessful",
              description: JSON.stringify(jsonArray),
            });

     let data= {
        status : charge.status,
        authorizeUri: charge.authorize_uri 
   }         

  res.json(data)
 
};

exports.OmiseInternetBankingHook =async (req, res) => {
  const { data, key} = req.body;

    if (key === 'charge.complete') {
      if (data.status === "successful") {

        let obj =JSON.parse(data.description);
        let item ={
            order : {
                      id    :  obj.order,
                      date  :  obj.current,
                      total : (obj.amount / 100),
                      user  :  obj.id,
                      transaction : data.transaction
                     },
           orderlist : data.description.cart        

            }
            
            obj.cart.map(async row =>
              {
                     let i=  await API.Model(SQL.QueryOrderlistAdd(row,data.description.order));
                      switch (i.status) {
                          case false:
                              console.log('add sucesss');
                              break;
                          default:
                                  console.log('flasedes');
                              break;
                      }
              })
       
     let respone =  await API.Model(SQL.QueryOrderAdd(item));
     console.log(respone)
      }
    }
  

  

};

