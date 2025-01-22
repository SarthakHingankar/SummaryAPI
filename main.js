const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());
const PORT = 3000;

async function summarize(text, lang, length) {
  const summary = "this is the summary";
  return summary;
}
app.post("/summarize/:lang?/:length?", async (req, res) => {
  const { text } = req.body;
  const lang = req.params.lang || "english";
  const length = req.params.length || "medium";

  if (!text || typeof text !== "string") {
    return res.status(400).json({ error: "Invalid text" });
  }

  const summary = await summarize(text, lang, length);
  res.json(summary);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
