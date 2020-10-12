const express = require('express'); //the backend framework
const mongoose = require('mongoose'); //allow to interact with the database 
const { Mongoose } = require('mongoose');
const config = require('config')

// access to the item file in the routes folder  
const items = require('./routes/api/items');


const app = express(); //initialize variable fo express

// Bodyparser Middleware
app.use(express.json());

// DB Config
const db = config.get('mongoURI');

// Connect to Mongo
mongoose
    .connect(db, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

// Use Routes- any request that gose to api/items/... will go to that file
app.use('/api/items', items)
app.use('/api/wellCareTrack', require('./routes/api/wellCareTrack'));
app.use('/api/diaperTrack', require('./routes/api/diaperTrack'));
app.use('/api/feedingTrack', require('./routes/api/feedingTrack'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));

// varible for the port we gone to use
const port = process.env.PORT || 5000;

// Listener- to listen to the port
app.listen(port, () => console.log(`server started on port ${port}`));
