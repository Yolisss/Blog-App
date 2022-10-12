import express from "express";
import cors from "cors";
import db from "./db/db-connection";

//body parser processes data sent in an http req body aka req.body
//"this is how its processing the data"
import bodyParser from "body-Parser";

const app = express();
const PORT = 8080;

app.use(cors());

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json("hello from techtonica");
});

app.listen(PORT, () => console.log(`Hola! Server is running on port ${PORT}`));
