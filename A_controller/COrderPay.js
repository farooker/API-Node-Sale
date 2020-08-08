const SQL = require('../A_query/S_orderPayment'); 
const API = require('../A_model/model');

exports.GetBrandAll =async (req, res) => {
    let data =  await API.Model(SQL.QueryOrderPayAll());
    res.json(data);
};
