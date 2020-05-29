
// const to require packages
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// const to require paths to routes folder
const apiRoutes = require("./routes/api");
const viewRoutes = require("./routes/views");

// creats var for express and sets up localhost server at 3000
const app = express();
const PORT = process.env.PORT || 3000;

// connects to the mongo database 'workout'.  'useInifiedTopology: true' fixes the deprecation warning when running the server.
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

app.use(apiRoutes);
app.use(viewRoutes);

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"));
  });
  
app.listen(PORT, () => console.log("PORT: ", PORT));