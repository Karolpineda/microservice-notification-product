// src/routes/notificationRoutes.js
const express = require("express");
const { productCreatedNotification } = require("../controllers/notificationController");

const router = express.Router();

// POST /notifications/product-created
router.post("/product-created", productCreatedNotification);

module.exports = router;
