const express = require("express");
const app = express();

app.get("/webhook", (req, res) => {
  const VERIFY_TOKEN = "hello123";

  const token = req.query["hub.verify_token"];
  const challenge = req.query["hub.challenge"];

  if (token === VERIFY_TOKEN) {
    return res.send(challenge);
  }

  res.sendStatus(403);
});

app.listen(3000);
