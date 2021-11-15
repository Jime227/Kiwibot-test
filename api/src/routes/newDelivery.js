const makeDelivery = require("../controllers/newDelivery");

const router = require("express").Router();

router.post("/", makeDelivery);

module.exports = router;
