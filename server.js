const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3001;
require("dotenv").config();

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

const mongoURI = process.env.MONGO_URI;

mongoose
  .connect(mongoURI, {})
  .then(() => console.log("connected to DB"))
  .catch(console.error);

const Jotspot = require("./models/Jotspot");

// Route to confirm that the server is running
app.get("/", (req, res) => {
  res.send("Backend server is running!");
});

app.get("/jots", async (req, res) => {
  const jots = await Jotspot.find();

  res.json(jots);
});

app.post("/jots/new", (req, res) => {
  const jot = new Jotspot({
    text: req.body.text,
  });

  jot.save();

  res.json(jot);
});

app.delete("/jots/delete/:id", async (req, res) => {
  const result = await Jotspot.findByIdAndDelete(req.params.id);

  res.json(result);
});

app.put("/jots/complete/:id", async (req, res) => {
  try {
    const jot = await Jotspot.findById({ _id: req.params.id });

    if (!jot) {
      return res.status(404).json({ error: "Jot not found" });
    }

    jot.complete = !jot.complete;

    await jot.save();

    res.json(jot);
  } catch (error) {
    console.error("Error completing jot:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
