const con = require("../../../modules/mysql");

const BoardController = {
  readAllBoard: (req, res) => {
    const sql = "select * from board";
    con.query(sql, (err, result) => {
      if (err) {
        return res.status(400).json({
          message: "전체 조회 실패",
        });
      }
      res.status(200).json({
        message: "전체 조회 성공",
        data: result,
      });
    });
  },

  detailBoard: (req, res) => {
    const { boardIdx } = req.params;
    const sql = "select * from board where boardIdx = ?";
    const params = [boardIdx];

    if (boardIdx) {
      con.query(sql, params, (err, result) => {
        if (err)
          return res.status(400).json({
            message: "조회 실패",
          });

        res.status(200).json({
          message: "조회 성공",
          data: result,
        });
      });
    } else {
      // gender 값이 올바르지 않은 경우
      res.status(401).json({
        message: "옳지 않은 idx 값 입니다.",
      });
    }
  },

  //POST

  //DELETE
};

module.exports = membershipController;
