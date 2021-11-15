const { Router } = require("express");
const router = Router();

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    res.json("it is working");
  } catch (error) {
    res, json(error);
  }
});

module.exports = router;
