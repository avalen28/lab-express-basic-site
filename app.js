const express = require("express");
const app = express();
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("<h1>Welcome Ironhacker. :)</h1>");
});

app.get("/prueba", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.listen(3000, () => {
  console.log("holi");
});
