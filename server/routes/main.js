//server connected to db
import express from "express";
import cors from "cors";
import db from "../db/db-connection.js";

const router = express.Router();

//9-20 considered request handler
//within it we are using a try/catch block
//get all post
//getting from db and putting in our browser
router.get("/main", async (req, res) => {
  try {
    let main = await db.any("SELECT * FROM intro_blog");
    res.json(main);
  } catch (e) {
    res.status(500).json({ message: "internal server error" });
  }
});

//get post by id
router.get("/main/:id", async (req, res) => {
  try {
    let id = req.params.id;
    let main = await db.any("SELECT * FROM intro_blog WHERE id=$1", [id]);
    res.json(main[0]);
  } catch (e) {
    res.status(500).json({ message: "internal server error" });
  }
});

router.post("/main", async (req, res) => {
  try {
    //object destructure
    const { title, images, paragraph, likes } = req.body;
    let main = await db.any(
      "INSERT INTO intro_blog (title, images, paragraph) VALUES($1,$2,$3)",
      [title, images, paragraph]
    );
    res.status(201).json({ message: "post added" });
  } catch (e) {
    res.status(500).json({ message: "internal server error" });
  }
});

router.delete("/:id", async (req, res) => {
  //if you find id within the function, delete it
  const blogsId = req.params.id;
  try {
    await db.none("DELETE FROM intro_blog WHERE id=$1", [blogsId]);
    res.send({ status: "sucess" });
  } catch (e) {
    //if you don't have it, bring back an error
    return res.status(500).json({ e });
  }
});

//this allows for this router to be used in other files
export default router;
