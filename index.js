const express = require('express');
const bodyParser = require('body-parser');
const app = express();
//const upload = require('./A_controller/CUploader');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('./public'));
app.use('/images', express.static('public/images'));
app.use(function(req,res,next){
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Methods","GET, POST ,DELETE, PUT");
  res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept, Authorization")
  next()
});
require('./A_routes/RLogin')(app);
require('./A_routes/RProduct')(app);
require('./A_routes/RBrand')(app);
require('./A_routes/Rpayment')(app);
require('./A_routes/ROrderPay')(app);

app.listen(3500, () => {
  console.log('Start server at port 3500.')
});

/*
require('dotenv').config();
var omise = require('omise')({
  'publicKey': process.env.OMISE_PUBLIC_KEY,
  'secretKey': process.env.OMISE_SECRET_KEY,
});

const createCharge =async()=>
{
  const customer= await  omise.customers.create({
          'email': 'john.doe@example.com',
          'description': 'John Doe (id: 30)',
          'card': 'tokn_test_5ki0w06328f4u9m20ov' 
        
      });

   const charges = await omise.charges.create({
        amount: 10000,
        currency: 'thb',
        customer: customer.id
      });
    console.log(charges)
}
*/
/*
app.post('/paymentCreditCard',async (req,res,next)=>{

  'email', 'name', 'amount', 'token'
});
*/
/*
var multer  = require('multer');
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './public/images');
    },
    filename: (req, file, cb) => {
      console.log(file);
      var filetype = '';
      if(file.mimetype === 'image/gif') {
        filetype = 'gif';
      }
      if(file.mimetype === 'image/png') {
        filetype = 'png';
      }
      if(file.mimetype === 'image/jpeg') {
        filetype = 'jpg';
      }
      cb(null, 'image-' + Date.now() + '.' + filetype);
    }
});
var upload = multer({storage: storage});
*/
/*
app.post('/upload',upload.single('file'),function(req, res, next) {
  console.log(req.file);
  if(!req.file) {
    res.status(500);
    return next(err);
  }
  res.json({ fileUrl: 'http://192.168.0.7:3000/images/' + req.file.filename });
})
*/

/*
app.get('/', (req, res) => {

  const privateKey = fs.readFileSync('private.key');
  const payload = {
    id:20134,
    name:'ebiwayo',
    role:'admin'
}
const token = jwt.sign({
  exp: Math.floor(Date.now() / 1000) + (60 * 60),
  data: payload
}, privateKey);
res.json({'token':token});

});

app.get('/authen', (req, res) => {
 
//  const authorization = req.headers['token']; 
  const token = req.headers['token'];   //.split(' ')[1]
  const privateKey = fs.readFileSync('private.key'); 
//  jwt.verify(token, privateKey, function(error, decoded) {
  jwt.verify(token,privateKey, function(error, decoded) {
    if(error) return res.status(401).json({ // หาก error ไม่ผ่าน
        "status": 401,
        "message": "Unauthorized"
    })   
    console.log(error)
    console.log(decoded)     


   res.json({'error':error,'decode':decoded});

});

app.get('/logout', (req, res) => {
 
  //  const authorization = req.headers['token']; 
    const token = req.headers['token'];   //.split(' ')[1]
    
     res.json('Detroy');
  
  });

});

*/