const { Router } = require("express");
const { authorController } = require("../controllers/authors.controllers");
const router = Router();
router.post("/author", authorController.addAuthor);

module.exports = router;
