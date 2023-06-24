// setup router and model
const express = require("express")
const router = express.Router()
const StoreModel = require("../Models/store")

router.get("/", (req, res) => {
    res.status(200).json({ping: "pong"})
})

router.get("/store", (req, res) => {
    const productArr = StoreModel.getAllProducts();
    res.json(productArr)
})

router.get("/store/:productId", (req, res) =>  {
    const { productId } = req.params
    const productInfo = StoreModel.getProductById(productId);
    res.json(productInfo);
})

router.get("*", (req, res) => {

});

module.exports = router
