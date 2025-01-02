import dotenv from "dotenv";

const express = require('express');
const cors = require('cors');
const { db } = require('./db/db');
const app = express();
const { readdirSync } = require('fs');

dotenv.config();
const PORT = process.env.PORT || 5000

//middlewares
app.use(express.json())
app.use(cors())

//routes
readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/' + route)))

// app.get('/', (req, res) => {
//   res.send('Hello World')
// })

const server = () => {
  db();
  app.listen(PORT, () => {
    console.log(`You are listening in the port ${PORT}`);
  })
} 

server();