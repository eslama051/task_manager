const connectDB = require("./db/connect");
const express = require("express");
const ErrorHandler = require("./middleware/ErrorHnadler");
const notFound = require("./middleware/not-found");
const app = express();
const tasksRoute = require("./routes/tasks");
require("dotenv").config();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("./public"));
app.use("/api/tasks", tasksRoute);
// app.get("/:id", (req, res) => {
//   const { id } = req.params;
//   console.log(req.params);
//   res.status(200).send(`id : ${id}`);
// });

app.use(ErrorHandler);
app.use(notFound);
const port = 5000;

const start = async () => {
  try {
    await connectDB(process.env.MANGO_URI);
    app.listen(port, () => {
      console.log("serve is running on port 5000 ....");
    });
  } catch (err) {
    console.log(err);
  }
};
start();
