import express from "express";
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoute.js";
import tweetRoute from "./routes/tweetRoute.js";
import cors from "cors";
import databaseConnection from "./config/db.js";

const port = 3000 || process.env.PORT
const app = express();

dotenv.config({
  path: ".env"
})
databaseConnection();

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
app.use(cookieParser());
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true
}
app.use(cors(corsOptions));

app.use("/api/user", userRoute);
app.use("/api/tweet", tweetRoute);

app.get("/", (req, res) => {
  res.send("Welcome to Twitter Clone API");
})


app.listen(port, () => {
  console.log(`App Listening on port ${port}`);
})