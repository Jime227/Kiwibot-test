const { Router } = require("express");

const deliveriesRouter = require("../routes/deliveries");
const newDeliveryRouter = require("../routes/newDelivery");
const botsRouter = require("../routes/bots");
const router = Router();

router.use("/newDelivery", newDeliveryRouter);
router.use("/deliveries", deliveriesRouter);
router.use("/bots", botsRouter);

module.exports = router;
