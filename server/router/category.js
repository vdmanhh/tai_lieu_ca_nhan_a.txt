const express = require("express")
const router = express.Router();
const {adminCheck,authCheck} = require('../mildware/auth')
const {CreateCategory,getAllCategory,deletee,findOneCate,updateCategory,findOneCateforSub} = require("../controller/category")
router.post("/create-category",adminCheck,authCheck,CreateCategory)
router.post("/getall-category",adminCheck,authCheck,getAllCategory)
router.post("/delete-category/:slug",adminCheck,authCheck,deletee)
router.post("/find-category",adminCheck,authCheck,findOneCate)

router.post("/update-category",adminCheck,authCheck,updateCategory)
router.post("/find-category-forsub",adminCheck,authCheck,findOneCateforSub)
module.exports = router