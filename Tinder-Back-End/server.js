import express from 'express';
import Cors from "cors";

// App config
const app = express();
const port = process.env.PORT || 8001;

// Middlewares
app.use(express.json());
app.use(Cors());

// Listener
app.listen(port, () => {
    console.log(`Server has started: ${port}`);
});