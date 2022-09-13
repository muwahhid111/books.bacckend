const Genre = require("../models/genre.model");

module.exports.genresControllers = {
  addGenre: async (req, res) => {
    const { nameGenre, descriptionGenre } = req.body;
    try {
      await Genre.create({
        nameGenre,
        descriptionGenre,
      });
      res.json("Жанр добавлен");
    } catch (error) {
      res.json(error);
    }
  },
  dropGenre: async (req, res) => {
    try {
      await Genre.findByIdAndRemove(req.params.id);
      res.json("Жанр удален");
    } catch (error) {
      res.json(error);
    }
  },
  getGenre: async (req, res) => {
    try {
      const a = await Genre.findById(req.params.id);
      res.json(a);
    } catch (error) {
      res.json(error);
    }
  },
};
