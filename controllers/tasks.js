const Task = require("../models/Task");
const asyncWrapper = require("../middleware/asyncWrapper");
const { createCustomError } = require("../errors/custom-error");

module.exports.getTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).send(tasks);
});
module.exports.getTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOne({ _id: taskID });
  res.status(200).send(task);
});
module.exports.createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(200).json({ task });
});
module.exports.updateTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    return next(createCustomError("not found", 404));
    // return res.status(404).json("there is no task with ID : " + taskID);
  }
  res.status(200).json(task);
});
module.exports.deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskID });
  if (!task) {
    cret;
    return res.status(404).json("there is no task with ID : " + taskID);
  }
  res.status(200).json(task);
});
