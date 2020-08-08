const SQL = require('../A_query/S_brand'); 
const API = require('../A_model/model');

exports.GetBrandAll =async (req, res) => {
    let data =  await API.Model(SQL.QueryBrandAll());
    res.json(data);
};
exports.GetBrandById =async (req, res) => {

    let data =  await API.Model(SQL.QueryBrandById(req.param('BID')));
    res.json(data);
};
exports.CreateBrand =async (req, res) => {
    let data =  await API.Model(SQL.QueryBrandCreate(req.body));
    res.json(data);
};
exports.UpdateBrand =async (req, res) => {
    let data =  await API.Model(SQL.QueryBrandUpdate(req.body));
    res.json(data);
};
exports.DeleteBrand =async (req, res) => {
    let data =  await API.Model(SQL.QueryBrandDelete(req.param('BID')));
    res.json(data);
};