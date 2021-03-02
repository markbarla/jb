const express = require("express");
const app = express();
const routes= require("./router/booksroutes")

app.use(express.json());

app.use(routes);

app.listen(5000, () => console.log("server work"));
