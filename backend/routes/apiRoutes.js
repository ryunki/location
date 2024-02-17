const express = require('express');
const router = express.Router()
const app = express();
const authRoutes = require('./authRoutes');
const invitationRoutes = require('./invitationRoutes');

app.use('/auth', authRoutes)
app.use('/invitation', invitationRoutes)

module.exports = app