const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const htmlRoutes = require("./routes/html-routes");
app.use(htmlRoutes);
const apiRoutes = require("./routes/api-routes");
app.use(apiRoutes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dbworkout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});