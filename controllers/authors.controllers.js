const Author = require("../models/author.model");
module.exports.authorController = {
  addAuthor: async (req, res) => {
    const { nameAuthor, infAuthor } = req.body;
    try {
      await Author.create({
        nameAuthor,
        infAuthor,
      });
      res.json("Автор добавлен");
    } catch (error) {
      res.json(error);
    }
  },
};
