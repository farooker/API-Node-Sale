exports.QueryLogin = (item) => {
    return "SELECT * FROM `tbl_user` WHERE tbl_user.userEmail='"+item.user+"' AND tbl_user.userPassword='"+item.pass+"'";
};
exports.QueryRegister = (item) => {
    return "INSERT INTO `tbl_user`(`userNickName`, `userEmail`, `userPassword`, `userAdmin`)"
          +"VALUES ('"+item.nickname+"','"+item.email+"','"+item.password+"','0')";
};