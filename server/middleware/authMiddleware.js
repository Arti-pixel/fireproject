const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  if (req.method === "OPTIONS") {
    next();
  }
  try {
    const token = req.headers.authorization.split(" ").slice(1, 3).join(" "); //Bearer rfmnernrgkel

    if (!token) {
      return req.status(401).json({ message: "Не авторизован" });
    }
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded;
    next();
  } catch (e) {
    return res.status(401).json({ message: "Не авторизован" });
  }
};
