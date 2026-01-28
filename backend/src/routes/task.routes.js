const express = require("express");
const Task = require("../models/Task");
const auth = require("../middleware/auth.middleware");

const router = express.Router();

// Create task
router.post("/", auth, async (req, res) => {
  const task = await Task.create({
    title: req.body.title,
    user: req.user.id
  });

  res.status(201).json(task);
});

// Get tasks
router.get("/", auth, async (req, res) => {
  const tasks = await Task.find({ user: req.user.id });
  res.json(tasks);
});

// Update task
router.put("/:id", auth, async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (!task) return res.status(404).json({ message: "Task not found" });

  task.completed = req.body.completed;
  await task.save();

  res.json(task);
});

// Delete task
router.delete("/:id", auth, async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Task deleted" });
});

module.exports = router;
