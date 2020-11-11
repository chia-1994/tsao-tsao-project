const express = require("express")

const db = require("../db_connect2")

const router = express.Router()

const fs = require("fs") //讀檔案寫檔案

//連線資料庫get資料方法
router.get("/get-db", (req, res) => {
  db.query("SELECT * FROM course_list ").then(([results]) => {
    res.json(results)
  })
})

module.exports = router
