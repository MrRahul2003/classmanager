import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

import Conn from "./db/Conn.js";
import route from "./routes/Route.js";

import path from "path"; // use this for image upload
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const DB = process.env.DB;
const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.json());
app.use("/public", express.static(path.join(__dirname, "public"))); // use this for image upload

// for hosting purpose -- static files
// app.use(express.static(path.join(__dirname, "../client/build")));
// app.get("*", function (req, res) {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

app.use("/", route);
Conn();

app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});

    // "test": "echo \"Error: no test specified\" && exit 1",
    // "start": "node index.js",
    // "server": "node index.js",
    // "client": "npm start --prefix ../client",
    // "dev": "concurrently \"npm start\" \"npm run client\""