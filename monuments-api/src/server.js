import express from 'express';
import cors from 'cors';
import { router } from './routers/monuments.router.js';

const app = express();

//enable cors
app.use(cors());

//body parser for JSON data
app.use(express.json());
app.get("/health", (req, res) => res.status(200).json({"available": true}));
app.use("/", router);

const port = 8000;
app.listen(port, () => console.log(`App started on http://localhost:${port}`));