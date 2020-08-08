const fs = require('fs');
const jwt = require('jsonwebtoken');
const SQL = require('../A_query/S_login'); 
const API = require('../A_model/model');
exports.create =async (req, res) => {
    let sign= [];
    let payload =  await API.Model(SQL.QueryLogin(req.body));
    if(payload.status === true)
    {
        sign.push(payload);
    }else{
        let private = fs.readFileSync('private.key');
        let token = jwt.sign({ exp: Math.floor(Date.now() / 1000) + (60 * 60),data: payload}, private);
        sign.push({
               token : token,
               status:payload.status,
               result: payload.result
        });
    }
    res.json(sign);
};

exports.register =async (req, res) => {
    let data =  await API.Model(SQL.QueryRegister(req.body));
    res.json(data);
};
exports.detroy =async (req, res) => {
    res.json('Detroy');
};