const express = require("express");
const { CreateSub ,getAllSub,deleteSub,findOneSub,UpdateSub} = require("../controller/sub");
const router = express.Router();
const {adminCheck,authCheck} = require('../mildware/auth')

router.post("/create-sub",adminCheck,authCheck,CreateSub)
router.post("/getall-sub",adminCheck,authCheck,getAllSub)
router.post("/delete-sub",adminCheck,authCheck,deleteSub)
router.post("/find-sub",adminCheck,authCheck,findOneSub)

router.put("/update-sub",adminCheck,authCheck,UpdateSub)
module.exports = router;