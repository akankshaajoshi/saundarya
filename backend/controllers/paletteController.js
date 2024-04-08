const User = require("../models/userModel");
const Palette = require("./../models/paletteModel");
const AppError = require("./../utils/appError");
const catchAsync = require("./../utils/catchAsync");

exports.savePalette = catchAsync(async (req, res, next) => {
  const savedPalette = await Palette.create({ user: req.user._id, ...req.body });

  if (!savedPalette) {
    return next(new AppError("Resource could not be created, kindly use the correct data.", 400));
  }

  res.status(201).json({
    status: "success",
    data: {
      palette: savedPalette,
    },
  });

  next();
});

exports.getPalettes = catchAsync(async (req, res, next) => {
  const palettes = await Palette.find({ user: req.user._id });

  res.status(200).json({
    status: "success",
    data: {
      palettes: palettes,
    },
  });
  next();
});
