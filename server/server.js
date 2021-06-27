const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const PORT = 3000;
const api = require("./routes/api");

app.use(bodyParser.json());
app.use(cors());
app.use("/api", api);

app.get("/", (req, res) => {
  res.send("Hello from server");
});

app.listen(PORT, () => console.log(`Magic happens on port ${PORT}`));
