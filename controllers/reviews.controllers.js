const Genre = require("../models/genre.model");
const Review = require("../models/review.model");
const Reviews = require("../models/review.model");
module.exports.reviewsControllers = {
  addReveisByBook: async (req, res) => {
    const { text, nameReview, bookReview } = req.body;
    try {
      await Review.create({
        text,
        nameReview,
        bookReview,
      });
      res.json("Рецензия добавлена к определенной книге");
    } catch (error) {
      res.json(error);
    }
  },
  dropRevies: async (req, res) => {
    try {
      await Review.findByIdAndRemove(req.params.id);
      res.json("Рецензия удалена");
    } catch (error) {
      res.json(error);
    }
  },
  getReviewsbyId: async (req, res) => {
    try {
      const geeet = await Review.find({ bookReview: req.params.id }).populate(
        "bookReview",
        "bookName"
      );
      res.json(geeet);
    } catch (error) {
      res.json(error.message);
    }
  }
};
