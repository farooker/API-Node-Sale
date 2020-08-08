exports.QueryBrandAll = () => {
    return 'SELECT * FROM `tbl_brand`';
};
exports.QueryBrandById = (item) => {
    return "SELECT * FROM `tbl_brand` WHERE tbl_brand.B_id='"+item+"'"
};
exports.QueryBrandCreate = (item) => {
    return "INSERT INTO `tbl_brand`(`B_Brand`) VALUES ('"+item.Bname+"')";
};
exports.QueryBrandUpdate = (item) => {
    return "UPDATE `tbl_brand` SET `B_Brand`='"+item.B_NAME+"' WHERE tbl_brand.B_id='"+item.B_ID+"'";
};
exports.QueryBrandDelete = (item) => {
    return "DELETE FROM `tbl_brand` WHERE  tbl_brand.B_id='"+item+"'";
};