import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Access denied. No token provided. Please login to continue.",
    });
  }
  try {
    const decodedTokenInfo = jwt.verify(token, process.env.JWT_SECRET);
    req.userInfo = decodedTokenInfo;
    next();
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Access denied. No token provided. Please login to continue.",
    });
  }
};
