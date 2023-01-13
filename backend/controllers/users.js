const User = require('../models/user');
const asyncHandler = require('../middlewares/asyncHandler');
const ErrorResponse = require('../utils/errorResponse');

/*
 * @ROUTE    POST /api/register
 * @DESC     Register user to the DB
 * @ACCESS   Public
 * */
module.exports.registerUser = asyncHandler(async (req, res, next) => {
  const userData = req.body;

  const userIdExists = await User.findOne({ userId: userData.userId });
  if (userIdExists)
    return next(new ErrorResponse(400, 'User id is already taken!'));

  const user = new User(userData);

  await user.save();
  const token = user.generateAuthToken();

  res
    .status(201)
    .header('x-auth-token', token)
    .json({
      success: true,
      status: 201,
      data: {
        id: user._id,
        userId: user.userId,
        name: user.name,
        token,
      },
    });
});

/*
 * @ROUTE    POST /api/login
 * @DESC     Login user by verifying credentials.
 * @ACCESS   Public
 * */
module.exports.loginUser = asyncHandler(async (req, res, next) => {
  const { userId, password } = req.body;

  if (!userId || !password)
    return next(400, 'Both a user ID and password are necessary.');

  const user = await User.findOne({ userId });
  if (!user) return next(new ErrorResponse(404, 'Invalid user id'));

  if (!(await user.matchPassword(password)))
    return next(new ErrorResponse(401, 'Invalid password!'));

  const token = user.generateAuthToken();

  res.header('x-auth-token', token).json({
    success: true,
    status: 200,
    data: {
      id: user._id,
      userId: user.userId,
      name: user.name,
      token,
    },
  });
});
