import express from "express";
import cors from "cors";
import { configDotenv } from "dotenv";
import userRoute from "./routes/auth.routes.js"
import connectDB from "./utils/db.js";
const app = express();
configDotenv()

app.use(express.json());
connectDB();
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);

app.get("/", (req, res) => {
  console.log("GET request received");
  res.json({ "hello js": "try new" });
});


app.use("/api/user", userRoute);

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});