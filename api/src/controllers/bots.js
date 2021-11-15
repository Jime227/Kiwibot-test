const { Router } = require("express");
const router = Router();

router.post("/", async (req, res) => {
  try {
    res.json("it is working");
  } catch (error) {
    res, json(error);
  }
});

module.exports = router;
