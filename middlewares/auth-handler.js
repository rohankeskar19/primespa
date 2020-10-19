var jwt = require("jsonwebtoken");
const config = require("../config/config");

module.exports = (req, res, next) => {
  if (req.headers) {
    console.log("req.header => ", req.headers.authorization);
    let token = req.headers.authorization;
    if (token && token.includes("Bearer")) {
      token = token.replace("Bearer ", "");
      let decoded = jwt.verify(token, config.secret);
      if (decoded) {
        next();
      } else {
        return res.status(401).json({ error: "Unauthorized" });
      }
      // console.log('decoded token => ', decoded, typeof(decoded));
    } else {
      return res.status(401).json({ error: "Unauthorized" });
    }
  }
};
