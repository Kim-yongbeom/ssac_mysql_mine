const con = require("../../../modules/mysql");

const AuthController = {
  uploadSignup: (req, res) => {
    const { id, name, password } = req.body;
    const sql = "select * from user where id = ?";
    const params = [id];
    con.query(sql, params, (err, result) => {
      if (err) {
        return res.status(400).json({
          message: "에러가 발생 했습니다",
        });
      }

      if (result) {
        res.status(400).json({
          message: "이미 같은 아이디가 있습니다",
        });
      } else {
        const sqlInsert =
          "insert into user (id, name, password) values (?, ?, ?)";
        const paramsInsert = [id, name, password];
        con.query(sqlInsert, paramsInsert, (err, result) => {
          if (err) {
            return res.status(400).json({
              message: "에러가 발생 했습니다",
            });
          }
          res.status(200).json({
            message: "아이디 생성",
          });
        });
      }
    });
  },

  uploadSignin: (req, res) => {
    const { id, password } = req.body;
    const sql = "select * from user where id = ? and password = ?";
    const params = [id, password];
    con.query(sql, params, (err, result) => {
      if (err) {
        return res.status(400).json({
          message: "에러가 발생 했습니다",
        });
      }
      if (result) {
        res.status(200).json({
          message: "로그인 성공",
        });
      } else {
        res.status(400).json({
          message: "로그인 실패",
        });
      }
    });
  },
};

module.exports = AuthController;
