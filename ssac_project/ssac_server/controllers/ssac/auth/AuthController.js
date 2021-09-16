const con = require("../../../modules/mysql");

const AuthController = {
  uploadSignup: (req, res) => {
    const { id, name, password } = req.body;
    const sql = "insert into user (id, name, password) values (?, ?, ?)";
    const params = [id, name, password];
    console.log(req.body);
    con.query(sql, params, (err, result) => {
      if (id === id) {
        console.log(err);
        return res.status(400).json({
          message: "이미 있는 아이디입니다",
        });
      }

      res.status(200).json({
        message: "생성이 완료 되었습니다",
        data: result,
      });
    });
  },

  uploadSignin: (req, res) => {
    const { id, password } = req.body;
    const sql = "insert into user (id, password) values (?, ?)";
    const params = [id, password];
    con.query(sql, params, (err, result) => {
      if (!result) {
      }
    });
    // const sql = "select * from user where id = ? ";
    // const params = [id]
    // con.query(sql, params, (err, result)=>{
    //   if(!result){

    //   }else{

    //   }
    // })
  },
};

module.exports = AuthController;
