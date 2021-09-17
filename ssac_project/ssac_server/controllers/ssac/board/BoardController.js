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
  uploadBoard: (req, res) => {
    const { title, content, boardPw, writer } = req.body;

    con.query(
      `INSERT INTO board (title, content, writer, writeTime, boardPw) VALUES (?, ?, ?, ?, ?)`,
      [title, content, Number(writer), new Date(), boardPw],
      (err, result) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            message: "에러가 발생하였습니다.",
          });
        }

        res.status(200).json({
          message: "게시글을 저장하였습니다.",
          data: result,
        });
      }
    );
  },

  //DELETE
  deleteBoard: (req, res) => {
    const { idx } = req.params;
    const sql = `delete from board where boardIdx = ?`;
    const params = [Number(idx)];

    con.query(sql, params, (err, result) => {
      if (err) {
        return res.status(400).json({
          message: "삭제 실패",
        });
      }

      res.status(200).json({
        message: "삭제 완료",
      });
      console.log(result);
    });
  },
};

module.exports = BoardController;
