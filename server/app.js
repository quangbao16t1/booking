import express, { Router } from "express";
import cors from "cors";
import helmet from "helmet";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import connectDb  from "./src/configs/db.config.js";
import userRouter from "./src/routes/user.routes.js";

dotenv.config();

connectDb;



const app = express();
const port = process.env.PORT || 3333;

app.use(helmet());
app.use(cors());
app.use(bodyParser.json());

app.use("/", userRouter);

app.get("/", (req, res) => {
       res.json({
              message: "Hell World"
       });
});

app.get("/api/", (req, res) => {
       console.log("dsadasdas");
       res.json({
              message: "Xin chao"
       });
});

app.listen(port, () => {
       console.log(`Server is listening on http://localhost:${port}`);
});