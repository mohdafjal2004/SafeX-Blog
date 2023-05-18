//A Mdiddlware for authorizing the user, by authenticating the token
const jwt = require("jsonwebtoken");
const secretKey = "AFJAL2000";

const authorizeUser = (req, res, next) => {
  const authHeaders = req.headers.authorization;

  if (authHeaders) {
    const token = authHeaders.split(" ")[1];
    //jwt.verify(token,secretKey,options,callback)
    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        return res.status(403).json({ message: "Unauthorized" });
      }
      //So name "user" is just used for convinience,use any
      req.user = decoded;
      console.log(decoded) 
      next();
    });
  } else {
    return res.status(403).json({ message: "Token not available" });
  }
};
module.exports = authorizeUser;
