const express = require("express");
const db = require("../db_connect2");
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: "tmp_uploads" }); //設定檔案暫存目錄
// const upload = require('../upload_img_module')
const fs = require("fs"); //讀檔案寫檔案


router.post("/", (req, res) => {
  db.query("SELECT * FROM `members` WHERE 1")
  .then(([results]) => {
    console.log(results);
    res.json(results);
  });
});
//會員登入
router.post("/login",async(req,res)=>{
  const sql = "SELECT * FROM `members` WHERE email = ? AND pwd = ?"
  const [results] = await db.query(sql,[req.body.email,req.body.pwd])
  return res.json({id:results[0].id,name:results[0].name,level:results[0].level});
})

//會員註冊
router.post("/register",async(req,res)=>{
  const sql = "INSERT INTO `members`(`name`, `email`, `pwd`, `gender`, `birth`, `country`, `address`, `level`, `avatar`) VALUES (?,?,?,?,?,?,?,?,?)";
  const [result] = await db.query(sql,[
    req.body.name,
    req.body.email,
    req.body.pwd,
    req.body.gender,
    req.body.birth,
    req.body.country,
    req.body.address,
    req.body.level,
    req.body.avatar
  ]);
  console.log(result);
  const insertId = result.insertId
  return res.json({ id: insertId })
})

//帳號設定頁面載入時的會員資料
router.post("/getMemberData", async (req, res) => {
  const sql = "SELECT * FROM `members` WHERE id=?"
  await db.query(sql,[req.body.id])
  .then(([results]) => {
    console.log(results);
    return res.json(results);
  });
});

//帳號設定頁面修改會員資料
router.post("/editMemberData", async (req, res) => {
  const sql =
    "UPDATE `members` SET `name`=? , `email`=?, `gender`=? , `birth`=? ,`country`=? WHERE id=?";
  const [result] = await db.query(sql, [
    req.body.name,
    req.body.email,
    req.body.gender,
    req.body.birth,
    req.body.country,
    req.body.id,
  ]);
  console.log(result);
  if (result.changedRows === 1) {
    return res.json({ message: "修改成功" });
  }
  //return res.json(result);
});

//帳號設定頁面修改會員密碼
router.post("/editMemberPwd", async (req, res) => {
  const sql = "UPDATE `members` SET `pwd`=? WHERE id=?";
  const [result] = await db.query(sql, [req.body.pwd,req.body.id]);
  if (result.changedRows === 1) {
    return res.json({ message: "密碼修改成功" });
  }
});

//會員上傳或更新大頭照
router.post("/editMemberAvatar",upload.single('avatar'),(req,res) => {
  console.log(req.file);
  // const sql = "UPDATE `members` SET `avatar`=? WHERE id=?";
  // const [ result ] = await db.query(sql,[req.body.avatar,req.body.id], req.file.buffer);
  // return res.json({ message: "上傳成功" });
  //fs.rename(req.file.path, "./public/images/member" + req.file.name)
        // res.json(req.file);
        // fs.createReadStream(req.file.path) //讀檔案
        //   .pipe(
        //     //串進去
        //     fs.createWriteStream(
        //       "./public/images/member" + req.file.name
        //     ) //寫檔案
        //   );
          return res.json({ message: "上傳成功" });
});
// })

// router.post("/editMemberAvatar",upload.single('image'),(req,res) => {
// console.log(req.file);
//   if (req.file && req.file.originalname) {
//     switch (req.file.mimetype) {
//       case "image/png":
//       case "image/jpeg":
//       case "image/jpg":
//         res.json(req.file);
//         fs.createReadStream(req.file.path) //讀檔案
//           .pipe(
//             //串進去
//             fs.createWriteStream(
//               "./public/images/member/member" + req.file.originalname
//             ) //寫檔案
//           );
//         break;
//       default:
//     }
//   } else {
//     res.send("失敗");
//   }
// });

// router.post("/memberImg", upload.single("file"), (req, res) => {
//   //單張圖片上傳
//   console.log(req.body);
//   const sql = "UPDATE `members` SET `avatar`=? WHERE id=?";
//   //const [ result ] = await db.query(sql,[req.body.file,req.body.id]);
//   if (req.body.id) {
//     db.query(sql,[req.body.imgname,req.body.id], (error, rows) => {
//       res.json({
//         status: 200,
//         message: "照片上傳成功"
//       });
//     });
//   } else {
//     res.json({
//       status: 404,
//       message: "照片上傳失敗"
//     });
//   }
// });


//優惠券頁面
router.post("/coupon",async(req,res) =>{
  const sql = "SELECT * FROM `coupon` WHERE 1"
  const [result] = await db.query(sql);
  return res.json(result);
})

//訂單資訊
router.post("/orderinfo",async(req,res)=>{
  const sql = "SELECT * FROM `Order_Info` WHERE `Member_id`=? "
  const [result] = await db.query(sql,[req.body.Member_id]);
  console.log(result)
  return res.json(result);
})

//訂單詳細資訊
router.post("/orderdetail",async(req,res)=>{
  const sql = "SELECT * FROM `Order_Detail` WHERE `OrderDetail_code`=? "
  const [result] = await db.query(sql,[req.body.Order_code]);
  console.log(result)
  return res.json(result);
})

module.exports = router;
