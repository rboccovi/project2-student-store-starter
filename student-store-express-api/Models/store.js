//import data from data db.json
const { storage } = require("../data/storage");

class StoreModel {
  getAllProducts() {
    return storage.get("products").value();
  }

  getProductById(id) {
    return storage.get("products").find({id:parseInt(id)}).value();
  }

  createPurchaseModel() {
    return storage.get("purchases").value();
  }
}

module.exports = new StoreModel();
