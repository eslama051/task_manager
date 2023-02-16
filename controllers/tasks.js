const Task = require("../models/Task");

module.exports.getTasks = (req, res) => {
  res.status(200).send("hello from tasks controllers");
};
module.exports.getTask = (req, res) => {
  res.status(200).send("get one task");
};
module.exports.createTask = async (req, res) => {
  const task = await Task.create(req.body);
  res.status(200).json({ task });
};
module.exports.updateTask = (req, res) => {
  res.status(200).send("update one task");
};
module.exports.deleteTask = (req, res) => {
  res.status(200).send("delete one task");
};
