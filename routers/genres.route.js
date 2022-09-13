const { Router } = require("express");
const { genresControllers } = require("../controllers/genres.controllers");

const router = Router();

router.post("/genres", genresControllers.addGenre);
router.delete("/genres/:id", genresControllers.dropGenre);
router.get("/genres/:id", genresControllers.getGenre);

module.exports = router;
