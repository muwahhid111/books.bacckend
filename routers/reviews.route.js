const { Router } = require("express");
const { reviewsControllers } = require("../controllers/reviews.controllers");
const router = Router();
router.post("/review", reviewsControllers.addReveisByBook);
router.get("/review/:id", reviewsControllers.getReviewsbyId);
router.delete("/reviev/:id", reviewsControllers.dropRevies);

module.exports = router;
