const Router = require("express").Router();
const bcrypt = require("bcryptjs");
const jsonwebtoken = require("jsonwebtoken");
const pool = require("../helpers/mysql");
const config = require("../config/config");
const staticContentHandler = require("../controllers/static-content");
const authHandler = require("../middlewares/auth-handler");


Router.post("/login",  (req, res) => {
  const { email, password } = req.body;
  //Did you create tables using my sql file? -Yes
  if (email && password) {
    if (email.trim() != "" && password.trim() != "") {
      pool.getConnection((err, con) => {
        if (err) {
          console.log(err);
          return res
            .status(500)
            .json({ error: "Failed to process request try again" });
        } else {
          con.query(
            `SELECT * FROM users WHERE email = "${email}"`,
            (err, result) => {
              con.release();
              if (err) {
                console.log(err);
                return res
                  .status(500)
                  .json({ error: "Failed to process request try again" });
              } else {
                if (result.length > 0) {

                  const user = {};
                  Object.assign(user, result[0]);
    // You created table using caps PASSWORD AS  column mine uses small case it's working now.
                  const hash = user.password;
                //   bcrypt.compare(password, hash).then(rest =>{
                //                           console.log(rest)

                //   }) Can you try now? - This 
                  bcrypt.compare(password, hash, (err, match) => {
                    // Where is the tab to restart?
                    if (err) {
                             console.log({err, test: "else", email, password, user})
                      return res
                        .status(500)
                        .json({ error: "Failed to process request try again" });
                    } else {
                      if (match) {
                        jsonwebtoken.sign(
                          user.email,
                          config.secret,
                          (err, token) => {
                            if (err) {
                              console.log(err);
                              return res.status(500).json({
                                error: "Failed to process request try again",
                              });
                            } else {
                              return res.json({ token: `Bearer ${token}` });
                            }
                          }
                        );
                      } else {
                        return res
                          .status(401)
                          .json({ error: "Passwords do not match" });
                      }
                    }
                  });
                } else {
                  return res
                    .status(404)
                    .json({ error: "User with given email does not exists" });
                }
              }
            }
          );
        }
      });
    } else {
      return res
        .status(422)
        .json({ error: "Invalid email and password provided" });
    }
  } else {
    return res
      .status(422)
      .json({ error: "An email & password is required to login" });
  }
});

Router.post("/register", (req, res) => {
  const { email, password} = req.body;
  if (email && password) {
    if (email.trim() != "" && password.trim() != "") {
      pool.getConnection((err, con) => {
        if (err) {
          return res
            .status(500)
            .json({ error: "Failed to process request try again" });
        } else {
          con.query(
            `SELECT * FROM users WHERE email = "${email}"`,
            (err, result) => {
              if (err) {
                con.release();
                return res
                  .status(500)
                  .json({ error: "Failed to process request try again" });
              } else {
                if (result.length > 0) {
                  con.release();
                  return res
                    .status(409)
                    .json({ error: "User with given email already exists" });
                } else {
                  bcrypt.hash(password, config.saltRounds, (err, hash) => {
                    if (err) {
                      return res
                        .status(500)
                        .json({ error: "Failed to process request try again" });
                    } else {
                      con.query(
                        `INSERT INTO users VALUES ("${email}","${hash}")`,
                        (err, result) => {
                          con.release();
                          if (err) {
                            return res.status(500).json({
                              error: "Failed to process request try again",
                            });
                          } else {
                            return res.json({
                              message: "User created successfully",
                            });
                          }
                        }
                      );
                    }
                  });
                }
              }
            }
          );
        }
      });
    } else {
      return res
        .status(422)
        .json({ error: "Invalid email and password provided" });
    }
  } else {
    return res
      .status(422)
      .json({ error: "An email & password is required to create an account" });
  }
});

Router.post("/static-content", authHandler ,staticContentHandler.addStaticContent);

Router.get("/static-content", staticContentHandler.getStaticContent);

module.exports = Router;
