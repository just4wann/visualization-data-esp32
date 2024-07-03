import express from 'express';
import mqtt from 'mqtt';
import { Server } from 'socket.io';
import cors from 'cors';
import { createServer } from 'node:http';

const app = express();
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  next();
});
app.use(cors({
  origin: 'http://localhost:3005',
  methods: ['GET', 'POST'],
  credentials: true
}));

const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3005',
    methods: ['GET', 'POST']
  }
});
const mqttClient = mqtt.connect('', {
  username: '',
  password: '',
  port: 1883,
});

// subscribe topic
mqttClient.on('connect', () => {
  if ( mqttClient.connected ) {
    console.log('Connected to MQTT')
    mqttClient.subscribe('sensor_tds')
  }
});

io.on('connection', (socket) => {
  console.log('Client connected!');
  for(let i = 0; i < 1; i++) {
    setInterval(() => {
      socket.emit('data', i);
    }, 1000)
  }
  

  mqttClient.on('message', (topic, message) => {
    const sendToClient = {
      topic: topic,
      message: message.toString(),
    };
    console.log(sendToClient);
    socket.emit('data', sendToClient);
  });

  if (socket.disconnected) {
    console.log('Client disconnected');
  }
});

server.listen(8000, () => {
  console.log('Server running at http://localhost:8000');
});
