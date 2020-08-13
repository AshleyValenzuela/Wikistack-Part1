const express = require("express");
const app = express();
const path = require("path");
const morgan = require("morgan");
app.use(morgan("dev"));

const staticMiddleware = express.static(path.join(__dirname, "public"));
app.use(staticMiddleware);

app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.send("Hello World");
});

let PORT = 3000;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
