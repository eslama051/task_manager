const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name must be provided"],
    maxlength: [20, "name must not exceed 20 charaters"],
    trim: true,
  },
  compeleted: { type: Boolean, required: false, default: false },
});

module.exports = mongoose.model("task", TaskSchema);
