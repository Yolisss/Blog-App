//server connected to db
import express from "express";
import cors from "cors";
import db from "../db/db-connection.js";

const router = express.Router();

//9-20 considered request handler
//within it we are using a try/catch block
router.get("/", async function (req, res) {
  try {
    const main = await db.any("SELECT * FROM intro_blog ORDER BY id", [true]);
    //send the data back to the server based on the species that came from the db
    res.send(main);
    //catch unexpected errors
    //console log err
    //and send response with a 400 error to client
  } catch (e) {
    console.log(e);
    return res.status(500).json({ e });
  }
});

//this allows for this router to be used in other files
export default router;
