const express = require('express');
const app     = express();
const db      = require('./db')
const PORT    = process.env.PORT || 3000

const bodyParser = require('body-parser');
app.use(bodyParser.json());  // req.body

const userRoutes    = require('./routes/userRoutes');
app.use('/user', userRoutes);

const postRoutes    = require('./routes/postRoutes');
app.use('/post', postRoutes);

app.listen(3000, () => {
    console.log('Listening on port 3000');
})