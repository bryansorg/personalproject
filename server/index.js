const express = require("express");
const cors = require("cors");
const { json } = require("body-parser");
const massive = require("massive");
require("dotenv").config();

const mc = require("./mainctrlr");

const port = process.env.PORT || 3001;

const app = express();
massive(process.env.CONNECTION_STRING)
  .then(dbInstance => app.set("db", dbInstance))
  .catch(err => console.log(err));

app.use(cors);
app.use(json());

app.get("/api/test", mc.getEmployees);

app.listen(port, console.log(`listening on port #${port}`));
