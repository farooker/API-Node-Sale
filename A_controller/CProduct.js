const SQL = require('../A_query/S_product'); 
const API = require('../A_model/model');


exports.GetProductAll =async (req, res) => {
    let data =  await API.Model(SQL.QueryProductAll());
    res.json(data)
};
exports.GetProductById =async (req,res) => {
    let data =  await API.Model(SQL.QueryProductById(req.param('PID')));
    res.json(data)
};
exports.CreateProduct =async (req,res) => {
    let data =  await API.Model(SQL.QueryProductCreate(req));
    res.json(data);
  
};
exports.UpdateProduct =async (req, res) => {
    let data =  await API.Model(SQL.QueryProductUpdate(req[0]));
    res.json(data)
};
exports.DeleteProduct =async (req, res) => {
    let data =  await API.Model(SQL.QueryProductDelete(req.param('PID')));
    res.json(data)
};
