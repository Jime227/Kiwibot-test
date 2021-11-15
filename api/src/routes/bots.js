const createBot = require("../controllers/bots");

const router = require("express").Router();

router.get("/", createBot);

module.exports = router;
