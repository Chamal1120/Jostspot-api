const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require("dotenv").config();

// Use environment variable for port or default to 3001
const PORT = process.env.PORT || 3001;

// Express middleware
app.use(express.json());

// Enable CORS || Replace with your front-end's URL or keep the * to allow all URLs
app.use(
	cors({
		origin: "*",
	})
);

// MongoDB URI environment variable
const mongoURI = process.env.MONGO_URI;

// Connecting to mongoDB Database
mongoose
	.connect(mongoURI, {})
	.then(() => console.log("connected to DB"))
	.catch(console.error);

const Jotspot = require("./models/Jotspot");

// Route to confirm that the server is running from a browser
app.get("/", (req, res) => {
	res.send("Backend server is running!");
});

// Route to get jots
app.get("/jots", async (req, res) => {
	const jots = await Jotspot.find();

	res.json(jots);
});

// Route to create jots
app.post("/jots/new", (req, res) => {
	const jot = new Jotspot({
		text: req.body.text,
	});

	jot.save();

	res.json(jot);
});

// Route to delete jots
app.delete("/jots/delete/:id", async (req, res) => {
	const result = await Jotspot.findByIdAndDelete(req.params.id);

	res.json(result);
});

// Route to mark jots as complete
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

// Route to confirm that the server is running from the console
app.listen(PORT, () => console.log(`server started on port ${PORT}`));
