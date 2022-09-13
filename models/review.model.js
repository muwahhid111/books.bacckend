const mongoose = require("mongoose");
const reviewSchema = mongoose.Schema({
  text: String,
  nameReview: String,
  bookReview: {
    ref: "Book",
    type: mongoose.Schema.Types.ObjectId,
  },
});

const Review = mongoose.model("Review", reviewSchema);
module.exports = Review;
