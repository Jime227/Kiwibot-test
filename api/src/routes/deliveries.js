const getDeliveries = require("../controllers/deliveries");

const router = require("express").Router();

router.get("/", getDeliveries);

module.exports = router;
