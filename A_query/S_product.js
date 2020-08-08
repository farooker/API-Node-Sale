exports.QueryProductAll = () => {
    return "SELECT `PRD_id`,`PRD_name`, `PRD_price`, tbl_brand.B_id,tbl_brand.B_Brand,`PRD_img`"
            +"FROM `tbl_product`,tbl_brand  "
            +"WHERE tbl_product.PRD_Brand = tbl_brand.B_id";
};
exports.QueryProductById = (item) => {
    return "SELECT `PRD_id`,`PRD_name`, `PRD_price`, tbl_brand.B_id,tbl_brand.B_Brand,`PRD_img`  "
            +"FROM `tbl_product`,tbl_brand "
            +"WHERE tbl_product.PRD_Brand = tbl_brand.B_id AND tbl_product.PRD_id='"+item+"'";
};
exports.QueryProductCreate = (item) => {
    return "INSERT INTO `tbl_product`(PRD_name,`PRD_price`, `PRD_Brand`, `PRD_img`)" 
          +" VALUES ('"+item.ItemName+"','"+item.ItemPrice+"','"+item.ItemBid+"','"+item.imgPath+"')";
};
exports.QueryProductUpdate = (item) => {
    return "UPDATE `tbl_product` SET `PRD_name`='"+item.ItemName +"' "
                    +  " ,`PRD_price`='"+item.ItemPrice +"' "
                    +  " ,`PRD_Brand`='"+item.ItemBid+"' "
                    +  " ,`PRD_img`='"+item.imgPath+"'  "
                    +  " WHERE  PRD_id='"+item.ItemId +"' ";
};
exports.QueryProductDelete = (item) => {
    return "DELETE FROM `tbl_product` WHERE  tbl_product.PRD_id='"+item+"'";
};