const express = require("express");
const app = express();
const tasksRoute = require("./routes/tasks");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("./public"));
app.use("/tasks", tasksRoute);
// app.get("/:id", (req, res) => {
//   const { id } = req.params;
//   console.log(req.params);
//   res.status(200).send(`id : ${id}`);
// });
app.listen("5000", () => {
  console.log("serve is running on port 5000 ....");
});
