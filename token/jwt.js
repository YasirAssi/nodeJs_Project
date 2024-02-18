import jwt from "jsonwebtoken";

const generateToken = (payload, expDate = "30d") => {
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      "m32n4mn324mn32mn324",
      { expiresIn: expDate },
      (err, token) => {
        if (err) {
          reject(err);
        } else {
          resolve(token);
        }
      }
    );
  });
};

const verifyToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, "m32n4mn324mn32mn324", (err, payload) => {
      if (err) reject(err);
      else resolve(payload);
    });
  });
};

export { generateToken, verifyToken };
