import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import getsRoutes from "./routes/gets.js";
import postsRoutes from "./routes/posts.js";

const app = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));

app.use('/api/gets', getsRoutes);
app.use('/api/posts', postsRoutes);

// starting the server
app.listen(3001, () => {
  console.log('listening on port 3001');
});