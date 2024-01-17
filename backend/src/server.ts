import express from "express";
import cors from "cors";

const PORT = 3002;

const app = express();

app.use(express.json());
app.use(
	cors({
		origin: ["http://localhost:5173"],
		credentials: true,
	})
);

app.get("/api", (_req, res) => {
	console.log("hi from front end");
	res.send({ message: "hello from backend" });
});

app.listen(PORT, () => console.log("App server listening on PORT", PORT));
