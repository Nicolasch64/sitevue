const express = require("express");
const Painting = require("../models/Paintings");
const router = express.Router();

router.get("/paintings", async (req, res) => {
	try {
		const paintings = await Painting.find();
		res.json(paintings);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

router.post("/paintings", async (req, res) => {
	const { title, description, imageUrl, year } = req.body;
	const paintings = new Painting({
		title,
		description,
		imageUrl,
		year,
	});

	try {
		const newPainting = await paintings.save();
		res.status(201).json(newPainting);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

module.exports = router;
