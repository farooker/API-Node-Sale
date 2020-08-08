module.exports = (app) => {
    const login = require('../A_controller/CLogin');

    // login and Create token 
     app.post('/login', login.create);

     //Register 
     app.post('/register', login.register);

    // logout and Detroy token
      app.get('/login',login.detroy);
}