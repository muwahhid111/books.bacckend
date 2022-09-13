const Book = require("../models/book.models");
module.exports.bookControllers = {
  addBook: async (req, res) => {
    const { nameBook, authorBook, genreBook } = req.body;
    try {
      await Book.create({
        nameBook,
        authorBook,
        genreBook,
      });
      res.json("Книга добавлена");
    } catch (error) {
      res.json(error);
    }
  },
  dropBook: async (req, res) => {
    try {
      await Book.findByIdAndRemove(req.params.id);
      res.json("Книга успешно удалена");
    } catch (error) {
      res.json(error);
    }
  },
  patchBook: async (req, res) => {
    const { nameBook, authorBook, genreBook } = req.body;
    try {
      const updated = await Book.findByIdAndUpdate(req.params.id, {
        nameBook,
        authorBook,
        genreBook,
      });
      res.json(updated);
    } catch (error) {
      res.json(error);
    }
  },
  getBookPoId: async (req, res) => {
    const gbook = await Book.findById(req.params.id);
    res.json(gbook);
    try {
    } catch (error) {}
  },
  getBooks: async (req, res) => {
    const gg = await Book.find();
    res.json(gg);
    try {
    } catch (error) {}
  },
  getBooksGenreId: async (req, res) => {
    try {
      const gListBook = await Book.find({
        genreBook: req.params.id,
      });
      res.json(gListBook);
    } catch (error) {
      res.json(error);
    }
  },
};
