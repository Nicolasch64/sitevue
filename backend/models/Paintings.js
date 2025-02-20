const mongoose = require("mongoose");

const paintingSchema = new mongoose.Schema({
	title: { type: String, required: true },
	description: { type: String, required: true },
	imageUrl: { type: String, required: true },
	year: { type: Number },
	createdAt: { type: Date, default: Date.now },
});

const Painting = mongoose.model("Painting", paintingSchema);
module.exports = Painting;
