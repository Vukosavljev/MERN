const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");

const PORT = process.env.PORT || 8000;
app.use(cors);
app.use(express.json());

// if (process.env.NODE_ENV !== "production") {
//   require("dotenv").config();
// }

// try {
//   mongoose.connect(process.env.MONGO_DB_CONNECTION, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });
//   console.log("Connected to MongoDB");
// } catch (error) {
//   console.log(error);
// }

app.get("/", (req, res) => {
  console.log(PORT);
  res.send("1321313   13213");
});

// app.get("/register", (req, res) => {
//   res.send("Hello from register");
// });

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
