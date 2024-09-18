const express = require("express");
const app = express();
const port = 3000;

const commnet = [
  {
    title: "sex",
    author: "debil",
    comment:
      "sdafasdfasdflkasdfjasdokfjasl serx\n sfsafdlasfjlks abobaboabo \n",
  },
  {
    title: "sex",
    author: "tehnick",
    comment: "abobas serx\n sfsafdlasfjlks abobaboabo \n",
  },
  {
    title: "sex",
    author: "nikita",
    comment: "pisi popi kaka4ki serx\n sexis popis abobaboabo \n",
  },
];

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/sex", (req, res) => {
  res.send(commnet);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
