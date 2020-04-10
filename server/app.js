require('dotenv').config();
const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

const dbUrl = `mongodb+srv://admin:${process.env.PASS_DB}@cluster0-1o9kj.mongodb.net/test?retryWrites=true&w=majority`;

const db = mongoose.connection;
mongoose.connect(
  dbUrl,
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true },
);

// GET ROUTES HERE
const forumRoutes = require('./routes/forum.routes');
const userRoutes = require('./routes/user.routes');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

db.on('error', console.error.bind(console, 'Connection Error: '));
db.once('open', function() {
    console.log('--- Mongoose Connected ---');
});

app.get('/', (req, res) => {
    res.send('Hello World');
});

// USE ROUTES HERE
app.use('/forum', forumRoutes);
app.use('/users', userRoutes);

app.listen(3000, (connect => {
    console.log('--- CONNECTED ---');
}));