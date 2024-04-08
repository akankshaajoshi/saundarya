const express = require("express");
const authController = require("./../controllers/authController");
const paletteController = require("./../controllers/paletteController");
const router = express.Router();

router.get("/", authController.protect, paletteController.getPalettes);
router.post("/", authController.protect, paletteController.savePalette);

module.exports = router;
