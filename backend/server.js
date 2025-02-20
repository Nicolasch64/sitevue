const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const drawingRoutes = require("./routes/drawingRoutes");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
	.connect("mongodb://localhost:27017/drawingdb", {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log("Connected to MongoDB"))
	.catch((error) => console.error("MongoDB connection error:", error));

app.use("/api", drawingRoutes);

app.listen(5000, () => {
	console.log("Server running on http://localhost:5000");
});
