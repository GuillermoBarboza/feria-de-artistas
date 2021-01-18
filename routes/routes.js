const express = require("express");
const router = express();
const controllers = require("../controllers/controllers");

router.get('/api/test', controllers.testAPI)

router.get('/api/product', controllers.allProducts)

module.exports = router;