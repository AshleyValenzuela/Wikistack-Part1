const express = require("express");
const app = express();
const path = require("path");
const morgan = require("morgan");
app.use(morgan("dev"));

const staticMiddleware = express.static(path.join(__dirname, "public"));
app.use(staticMiddleware);

app.use(express.urlencoded());
const layout = require("./views/layout");

const { db, Page, User } = require("./models");

app.get("/", (req, res) => {
  res.send(layout(""));
});

db.authenticate().then(() => {
  console.log("connected to the database");
});

const wikiRouter = require('./routes/wiki')
const usersRouter = require('./routes/users')
app.use('/wiki', wikiRouter)

let PORT = 3000;

const init = async () => {
  await db.sync({ force: true });
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
  });
};

init();
