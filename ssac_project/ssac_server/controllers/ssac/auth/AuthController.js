const con = require("../../../modules/mysql");

const AuthController = {
  uploadSignup: (req, res) => {
    const { id, name, password } = req.body;
    const sql = "insert into user (name, password) values (?, ?)";
    const params = [name, password];
    console.log(req.body);
    con.query(sql, params, (err, result) => {
      if (id === userIdx) {
        console.log(err);
        return res.status(400).json({
          message: "에러가 발생 했습니다",
        });
      }

      res.status(200).json({
        message: "생성이 완료 되었습니다",
        data: { userIdx, id, name, password },
      });
    });
  },

  uploadSignin: (req, res) => {
    const { id, password } = req.body;
    const sql = "insert into user select id, password from dual where exists";
  },
};

module.exports = AuthController;
