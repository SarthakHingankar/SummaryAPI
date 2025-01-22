const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());
const PORT = 3000;

app.post("/summarize/:lang?/:length?", async (req, res) => {
  const { text } = req.body;
  const { lang, length } = req.params;

  res.json("works");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
