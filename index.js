const {json} = require("express");
const express = require("express");
const app = express();

let base_url = "hello";

app.use(json());

app.post("/base_url", (req, res) => {
  base_url = req.body.base_url;
  res.status(200).json({staus: "success"});
});
app.get("/base_url", (req, res) => {
  res.status(200).json({url: base_url});
});

app.listen(5000, () => {
  console.log("Server running");
});
