const User = require("./../models/userModel");
const AppError = require("./../utils/appError");
const catchAsync = require("./../utils/catchAsync");

exports.updateMe = catchAsync(async (req, res, next) => {
  //1. Create error if user POSTS password data
  if (req.body.password || req.body.passwordConfirm) {
    return next(new AppError("This route is not for updating passwords, please user updateMyPassword.", 400));
  }
  //2. Filter unwanted fields from the user
  const filteredBody = filterObj(req.body, "name", "email");
  //3. Update the user document
  const updatedUser = await User.findByIdAndUpdate(req.user.id, filteredBody, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    status: "success",
    data: {
      user: updatedUser,
    },
  });
});
