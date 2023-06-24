// imports and dependencies 
const express = require ("express")
const cors= require("cors")
const morgan = require("morgan")

const storeRouter = require ('./Routes/StoreRoutes')

const app = express()

// mounting middleware
app.use(cors())
app.use(morgan("dev"))
app.use(express.json())

app.use("/", storeRouter);

module.exports = app
