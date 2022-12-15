const express = require("express");
const app = express();
const hbs = require("hbs"); // impo!

app.use(express.static("public"));
app.set("view engine", "hbs"); // el renderizador va a ser hbs
app.set("views", __dirname + "/views"); // coge los archivos de views. Para llegar sigue esta ruta.
hbs.registerPartials(__dirname + "/views/partials"); // inicio de partials

//data

const data = {
  intro:
    " BoJack Horseman is an American adult animated black comedy-drama streaming television series. he series revolves around an anthropomorphic horse named BoJack Horseman.",
  about:
    "BoJack Horseman, a self-loathing cynical alcoholic horse currently in his 50s, whose acting career peaked when he starred in a successful 1990s family sitcom called Horsin Around. Though he began as a youngbright-eyed actor, he has since grown bitter, deeply depressed, and jaded towards Hollywoo and who he has become post-fame.",
};
const imgData = {
  // data de imagenes
  sources: [
    { path: "img/bojack-about.png" },
    { path: "img/bojack-gallery-removebg-preview.png" },
    { path: "img/bojack-home.png" },
  ],
};
// links and routes user - server
app.get("/", (req, res) => {
  res.render("index", data); //res.sendFile(__dirname + "/views/index.html");
});

app.get("/about", (req, res) => {
  res.render("about", data); //,"si pasara data");
});

app.get("/gallery", (req, res) => {
  res.render("gallery", imgData);
});

// lugar del localhost
app.listen(3000, () => {
  console.log("holi");
});
