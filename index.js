const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use(require("./routers/authors.route"));
app.use(require("./routers/genres.route"));
app.use(require("./routers/books.route"));
app.use(require("./routers/reviews.route"));

mongoose.connect(
  "mongodb+srv://Umar:Umar2002@cluster0.lfxnu2y.mongodb.net/booksshop?retryWrites=true&w=majority",
  (err) => {
    if (err) {
      console.log(err);
    }
    console.log("База подключена");
  }
);

app.listen(3000, () => {
  console.log("started");
});
