const express = require('express')
const router = express.Router();
const {uploadd,removed} = require('../controller/cloudinary')
const {adminCheck,authCheck} = require('../mildware/auth')
router.post("/uploadimages",authCheck ,adminCheck,uploadd)
router.post("/removeimages",authCheck ,adminCheck,removed)

module.exports = router;