/**
 * Quillora Backend - server.js
 */
const express = require('express');
const http = require('http');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { Server } = require('socket.io');
const path = require('path');

dotenv.config();
const app = express();
app.use(cors({ origin: process.env.CLIENT_URL || '*' }));
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// connect DB
mongoose.connect(process.env.MONGO_URI)
  .then(()=> console.log('MongoDB connected'))
  .catch(err=> console.error('MongoDB error', err));

// routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/posts', require('./routes/postRoutes'));
app.use('/api/groups', require('./routes/groupRoutes'));
app.use('/api/messages', require('./routes/messageRoutes'));
app.use('/api/admin', require('./routes/adminRoutes'));
app.use('/api/reports', require('./routes/reportRoutes'));

// global error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({error: err.message || 'Server error'});
});

const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: process.env.CLIENT_URL || '*' }
});

// === Simple Socket.IO handlers ===
io.on('connection', socket => {
  console.log('Socket connected', socket.id);

  socket.on('join', userId => {
    socket.join('user_' + userId);
    socket.userId = userId;
  });

  socket.on('send_message', data => {
    // { to, from, text, conversationId }
    io.to('user_' + data.to).emit('receive_message', data);
  });

  socket.on('notify', data => {
    // { userId, type, payload }
    io.to('user_' + data.userId).emit('notification', data);
  });

  socket.on('typing', data => {
    io.to('user_' + data.to).emit('typing', data);
  });

  socket.on('disconnect', () => {
    console.log('Socket disconnected', socket.id);
  });
});

// expose io to routes/controllers if needed
app.set('io', io);

const PORT = process.env.PORT || 5000;
server.listen(PORT, ()=> console.log('Server listening on', PORT));
