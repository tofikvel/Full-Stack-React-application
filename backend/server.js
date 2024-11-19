require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const cartRoutes = require('./routes/cartRoutes');
const storeRoutes = require('./routes/storeRoutes');

const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// main store routes
app.use('/api/shop/store', storeRoutes);

// store cart routes
app.use('/api/shop/cart', cartRoutes);


// connect to the database
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //listeing for the requests
        app.listen(process.env.PORT, () => {
            console.log("Connected to the db & listening on port:", process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })
