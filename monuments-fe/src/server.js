import express from 'express';

const app = express();

app.use(express.static("public"));

const port = 8001;
app.listen(port, () => console.log(`Front end started on http://localhost:${port}`));