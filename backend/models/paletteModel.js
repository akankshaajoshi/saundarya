const mongoose = require("mongoose");
const User = require("./userModel");

const paletteSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  name: {
    type: String,
    required: true,
  },
  palettes: [
    {
      type: String,
      required: true,
      match: /^#[0-9A-Fa-f]{6}$/, // Ensure the value is a valid hex code
    },
  ],
});

const Palette = new mongoose.model("Palette", paletteSchema);

module.exports = Palette;
