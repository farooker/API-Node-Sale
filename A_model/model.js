var connectModel = require("./connect");
var Model = async function(sql){ 
 try{
    let model=  await connectModel.query(sql);
    switch(model[0].length)
    {
        case 0  : return{ status : true, result :'Error  Try agian ?' };   break;
        default : return{ status : false, result : model[0] };  break;
    }
   }catch(err){
       return{ status : true, result :err };
   }
   
}

module.exports.Model = Model;