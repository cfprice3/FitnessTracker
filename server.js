
// const to require packages
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// const to require paths to routes folder
const apiRoutes = require("./routes/api");
const viewRoutes = require("./routes/views");

const app = express();
const PORT = process.env.PORT || 3000;

// connects to the mongo database 'workout'.  'useInifiedTopology: true' fixes the deprecation warning when running the server.
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true, useUnifiedTopology: true });

