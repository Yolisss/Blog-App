import express from "express";
import cors from "cors";
import db from "./db/db-connection.js";
import postRoutes from "./routes/main.js";

//body parser processes data sent in an http req body aka req.body
//"this is how its processing the data"
import bodyParser from "body-Parser";

import mainRouter from "./routes/main.js";

const app = express();
const PORT = 8080;

app.use(cors());

app.use(bodyParser.json());

//this allows us to use the routes
app.use(postRoutes);

app.use("/main", mainRouter);

app.get("/", (req, res) => {
  res.json("hello from techtonica");
});
//seed the db with some initial blog post: "what info does the db start with"
//INSERT INTO *name of table*
db.none(
  "INSERT INTO intro_blog ( id, title, paragraph ) VALUES ('1', ${title}, ${paragraph} ) on conflict(id) do update set title = ${title}, paragraph = ${paragraph};",
  { title: "Welcome to!", paragraph: "banana hat" }
);
db.none(
  "INSERT INTO intro_blog ( id, title, paragraph ) VALUES ('2', ${title}, ${paragraph} ) on conflict(id) do update set title = ${title}, paragraph = ${paragraph};",
  { title: "Goodbye!", paragraph: "banana hat" }
);

app.listen(PORT, () => console.log(`Hola! Server is running on port ${PORT}`));
