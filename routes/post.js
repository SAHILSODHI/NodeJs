const express = require("express")
const router = express.Router()
const getPostController = require("../controllers/post")

router.get("/", getPostController.getPost)
module.exports = router;