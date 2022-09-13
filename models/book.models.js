const mongoose = require("mongoose");
const bookSchema = mongoose.Schema({
  nameBook: String,
  authorBook: {
    ref: "Author",
    type: mongoose.Schema.Types.ObjectId,
  },
  genreBook: {
    ref: "Genre",
    type: mongoose.Schema.Types.ObjectId,
  },
});
const Book = mongoose.model("Book", bookSchema);
module.exports = Book;
