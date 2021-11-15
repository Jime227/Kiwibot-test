const { Router } = require("express");
const router = Router();
const db = require("../app");

router.post("/", async (req, res) => {
  const { id, creation_date, state, pickup, dropoff, zone_id } = req.body;
  const data = { id, creation_date, state, pickup, dropoff, zone_id };
  try {
    await db.collection("deliveries").doc("delivery").set(data);

    console.log("hello", db);
    res.json("it is working");
  } catch (error) {
    console.log(error);
    res.json(error);
  }
});

module.exports = router;
