import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import getsRoutes from "./routes/gets.js";
/*const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');*/

'use strict';
import fs from "fs";

const app = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));

app.use('/api/gets', getsRoutes);

/*

, (req, res) => {
    let rawdata = fs.readFileSync('api/source/user.json');
    let user = JSON.parse(rawdata);
    console.log(user);
    res.send(user);
});
*/
app.get('/userSubmissions', (req, res) => {
    let rawdata = fs.readFileSync('api/source/user.json');
    let user = JSON.parse(rawdata);
    console.log(user);
    res.send(user);
});


// starting the server
app.listen(3001, () => {
  console.log('listening on port 3001');
});