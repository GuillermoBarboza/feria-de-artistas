require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const routes = require('./routes')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use(routes)


app.listen(8000, () => {
    console.log("listening on 8000");
  });

