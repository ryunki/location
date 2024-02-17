require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const { createServer } = require('http');
const { Server } = require('socket.io');

// Middleware to parse JSON bodies
app.use(bodyParser.json());

const server = createServer(app);
const io = new Server(server,{
  cors: {
    // "proxy":"exp://192.168.45.179:8081",
    origin: "*",
    // origin: "exp://192.168.45.179:8081",
    // or with an array of origins
    // origin: ["https://my-frontend.com", "https://my-other-frontend.com", "http://localhost:3000"],
    methods: ['GET', 'POST'],
  }
});
io.on('connection', (socket) => {
  console.log('a user connected');
});
// console.log(io)


const apiRoutes = require('./routes/apiRoutes')

// mongodb connection
const connectDB = require("./config/db");
connectDB();

app.use('/api', apiRoutes)

app.get('/', (req, res) => {
  res.send('hey from backend');
});


const PORT = 3000
server.listen(PORT, () => {
  console.log('server running at '+PORT);
});