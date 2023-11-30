import express  from "express";
import path from "path";
import ejs from "ejs";
import cors from "cors";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import dbConnect from "./server/database/connect.js";

dbConnect();
dotenv.config();
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const templatePath = path.join(__dirname, './views');
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', templatePath);
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Import routes from the server/routes/routes.js file
import routes from "./server/routes/routes.js";
app.use(routes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})
