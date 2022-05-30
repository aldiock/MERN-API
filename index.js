const express = require("express");

const app = express();

app.use(() => {
  console.log("Hello server....");
  console.log("Hello server....Lagi");
});

app.listen(4000);
