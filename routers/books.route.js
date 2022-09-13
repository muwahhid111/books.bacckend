const { Router } = require("express");
const { bookControllers } = require("../controllers/books.controllers");
const router = Router();

router.post("/books", bookControllers.addBook);
router.delete("/books", bookControllers.dropBook);
router.patch("/books", bookControllers.patchBook);
router.get("/books/:id", bookControllers.getBookPoId);
router.get("/books", bookControllers.getBooks);
router.get("/books/:id", bookControllers.getBooksGenreId);

module.exports = router;
