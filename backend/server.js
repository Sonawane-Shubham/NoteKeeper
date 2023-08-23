const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const { errorHandler, notFound } = require("./middlewares/errorMiddleware");

const app = express();

dotenv.config();

// connectDB();

//whenever you accept json data
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is Running.......");
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
  console.log(req.params);
});

app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((record) => record._id === req.params.id);
  res.send(note);
});

app.use("/api/users", userRoutes);
app.use(notFound);
app.use(errorHandler);

// app.get("/api/notes/:id", (req, res) => {
//   const note = notes.find((n) => n._id == req.params.id);
//   console.log(req.params);
//   res.send(note);
// });

// userSchema.methods.matchPassword = async function (enteredPassword) {
//   return await bcrypt.compare(enteredPassword, this.password);
// };

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server started on ${PORT}`);
});
