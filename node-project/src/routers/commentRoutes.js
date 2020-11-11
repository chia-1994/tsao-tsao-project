const express = require('express')
const router = express.Router()
const db = require('../db_connect2')
const moment = require('moment-timezone')
const multer = require('multer')
const upload = multer({dest: __dirname + '/../tmp_uploads'})




async function getData (req) {
    const output = {
        page: 0,
        perPage: 5,
        totalRows: 0,
        totalPages: 0,
        rows: []
    }

    const [[{ totalRows }]] = await db.query("SELECT COUNT(1) totalRows FROM rating")
    if(totalRows>0){
        let page = parseInt(req.query.page) || 1
        output.totalRows = totalRows
        output.totalPages = Math.ceil(totalRows/output.perPage)

        if(page < 1) {
            output.page = 1
        } else if(page > output.totalPages) {
            output.page = output.totalPages
        } else {
            output.page = page
        }
        // LIMIT ${(output.page-1)*output.perPage}, ${output.perPage}
        let sql = `SELECT * FROM rating ORDER BY sid DESC`
        console.log(sql)
        const [r2] = await db.query(sql)
        r2.forEach(el=>{
            el.date = moment(el.date).format('YYYY-MM-DD')
        })
        output.rows = r2
    }

   return output
}

router.get('/a', async (req, res)=>{
    res.json(await getData(req) )
})

router.get('/list', (req, res)=>{
    db.query('SELECT * FROM rating ORDER BY sid DESC')
        .then(([results])=>{
           res.json(results)
        })
    // res.json([])
})

// INSERT INTO `rating`
//let set = (`sid`, `product_sid`, `name`, `email`, `skin_type`, `skin`, `rating`, `title`, `review`, `date`) VALUES ([value-1],[value-2],[value-3],[value-4],[value-5],[value-6],[value-7],[value-8],[value-9],[value-10])

// {
//     name: 'ee',
//     email: 'ee',
//     title: 'e',
//     content: 'ee',
//     created_at: 2020-11-10T13:41:08.758Z
//   }
// router.post('/add', upload.none(), async (req, res) => {
//     const data = { ...req.body }
//     data.created_at = new Date()
//     console.log(data)
//     let set = "(`sid`, `product_sid`, `name`, `email`, `skin_type`, `skin`, `rating`, `title`, `review`, `date`) VALUES (NULL,2,2,2,2,2,2,2,2,NOW())"
//     const sql = "INSERT INTO `rating` " + `${set}`;
//     console.log(sql)
//     const [{ affectedRows, insertId }] = await db.query(sql, [data])

//     res.json({
//         success: !!affectedRows,
//         affectedRows,
//         insertId,
//     })
// });


router.post('/add',async(req,res)=>{
    const sql = "INSERT INTO `rating`(`sid`, `product_sid`, `name`, `email`, `skin_type`, `skin`, `rating`, `title`, `review`, `date`) VALUES (NULL,1,?,?,1,2,3,?,?,NOW())";
    const [result] = await db.query(sql,[
      req.body.name,
      req.body.email,
      req.body.title,
      req.body.review
    ]);
    console.log(result);
    const insertId = result.insertId
    return res.json({ success: !!affectedRows,
        affectedRows,
        insertId, })
  })

module.exports=router