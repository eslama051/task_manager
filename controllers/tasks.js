module.exports.getTasks = (req, res) => {
  res.status(200).send("hello from tasks controllers");
};
module.exports.getTask = (req, res) => {
  res.status(200).send("get one task");
};
module.exports.createTask = (req, res) => {
  res.status(200).send("create a new task ");
};
module.exports.updateTask = (req, res) => {
  res.status(200).send("update one task");
};
module.exports.deleteTask = (req, res) => {
  res.status(200).send("delete one task");
};
