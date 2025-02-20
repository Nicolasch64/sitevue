const mongoose = require("mongoose");

const drawingSchema = new mongoose.Schema({
	title: { type: String, required: true },
	description: { type: String, required: true },
	imageUrl: { type: String, required: true },
	year: { type: Number },
	createdAt: { type: Date, default: Date.now },
});

const Drawing = mongoose.model("Drawing", drawingSchema);
module.exports = Drawing;
