const router = require("express").Router();
const Todo = require("../models/Todo");

router.get("/", async (req, res) => {
  const item = await Todo.find();
  res.render("index", { todo: item });
});

module.exports = router;
