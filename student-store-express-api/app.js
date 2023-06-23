// YOUR CODE HERE
const express = require ("express")
const morgan = require ("morgan")
const cors= require("cors")

// const storeRouter = require ("./routes/stores");


const app = express()

//mounting middleware


app.use (cors())
app.use (morgan ("dev"));
app.use(express.json());


// app.use ("/", storeRoutes);
