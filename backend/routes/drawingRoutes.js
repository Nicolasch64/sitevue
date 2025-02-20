const express = require("express");
const Drawing = require("../models/Drawing");
const router = express.Router();

router.get("/drawings", async (req, res) => {
	try {
		const drawings = await Drawing.find();
		res.json(drawings);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

router.post("/drawings", async (req, res) => {
	const { title, description, imageUrl, year } = req.body;
	const drawing = new Drawing({
		title,
		description,
		imageUrl,
		year,
	});

	try {
		const newDrawing = await drawing.save();
		res.status(201).json(newDrawing);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

module.exports = router;
