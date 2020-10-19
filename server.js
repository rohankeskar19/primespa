const express = require("express");
const path = require("path");
const config = require("./config/config");
const api = require("./routes/api");

const app = express();

console.log({__dirname, env: process.env.NODE_ENV});
app.use(express.static(__dirname + "/public"));
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({ extended: false }));
app.use("/api/", api);

if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static(__dirname+"/client/build"));

  app.get("/*", (req, res) => {
     // res.send("Hello world");
     res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || config.PORT;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
