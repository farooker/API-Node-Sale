exports.QueryOrderAdd = (item) => {
    /*
   let sql=[];
   let id = item.order.id;
   sql.push('INSERT INTO `tbl_order` VALUES ("'+item.order.id+'","'+item.order.date+'","'+item.order.total+'","'+item.order.user+'","'+item.order.transaction+'");')
   item.orderlist.map(item =>{
     let arr = 'INSERT INTO `tbl_orderlist`(`orderDProduct`, `orderDPrice`, `orderDAmount`, `orderID`)'+
             'VALUES ("'+item.PRD_id+'","'+item.PRD_price+'","'+item.PRD_Amount+'","'+id+'");';
             
     sql.push(arr);

   });
      return sql.join(''); 
*/

    return  'INSERT INTO `tbl_order` VALUES ("'+item.order.id+'","'+item.order.date+'","'+item.order.total+'","'+item.order.user+'","'+item.order.transaction+'")'
    
};
exports.QueryOrderlistAdd = (item,order) => {
   
    return  'INSERT INTO `tbl_orderlist`(`orderDProduct`, `orderDPrice`, `orderDAmount`, `orderID`)'+
             'VALUES ("'+item.PRD_id+'","'+item.PRD_price+'","'+item.PRD_Amount+'","'+order+'")'
   
   
   
   
   // return 'INSERT INTO `tbl_orderlist` VALUES ("'+item.PRD_id+'","'+item.PRD_price+'","'+item.PRD_Amount+'","'+order+'")'
}