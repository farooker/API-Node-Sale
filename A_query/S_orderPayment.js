exports.QueryOrderPayAll = (item) => {
 

    return  "SELECT `orderID`, `orderDate`, `orderTotal`,tbl_user.userNickName,`transaction`,"+
    "    CASE WHEN tbl_order.transaction !='null' THEN 'Sucess' "+
    "   ELSE  'Not Sucess' END as status "+
    "    FROM `tbl_order`,tbl_user  "+
    "    WHERE  tbl_user.userID =tbl_order.orderUser"+
    "   ORDER BY  tbl_order.orderID DESC";
    
};