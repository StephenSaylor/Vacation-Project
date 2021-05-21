const router = require("express").Router();
const { Trip } = require("../../models");

// GET all travelers and all Trips
router.get("/", async (req, res) => {
  res.status(500).send("500 Internal Server Error.");
});

// GET travelers by id and their Trips
router.get("/:id", async (req, res) => {
  res.status(500).send("500 Internal Server Error.");
});

// POST create new traveler
router.post("/", async (req, res) => {
  res.status(500).send("500 Internal Server Error.");
});

// PUT update traveler
router.put("/:id", async (req, res) => {
  res.status(500).send("500 Internal Server Error.");
});

// DELETE traveler
router.delete("/:id", async (req, res) => {
  res.status(500).send("500 Internal Server Error.");
});

module.exports = router;