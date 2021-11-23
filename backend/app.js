require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const router = require("./routes");
app.use(router);

const PORT = process.env.PORT | 3001;

app.listen(PORT, () => console.log(`listen on ${PORT}`));
