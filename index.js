const ejs = require("ejs");
const express = require("express");

const app = express();

// Task 1: Create an instance of an express app. Then complete Task 7 before moving on to Task 2.

app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});

// Task 2: Set the view engine to EJS.

app.set("view engine", "ejs");

// Task 3: Set up the middleware to give express access to the public folder.

app.use(express.static(__dirname + "/public"));

// Task 4: Set up the route handler for /. It should send back the index.html file as a static file.

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// Task 5: Import collectionRoutes.js and name it appropriately. (We have not modularized it yet)

const collectionRoutes = require(__dirname + "/routes/collectionRoutes.js");

// Task 6: Using middleware, mount the imported routes to the prefix path '/collection'.

app.use("/collection", collectionRoutes);

app.use((req, res, next) => {
  res.status(404).send("404 Not Found");
});

// Task 7 : Start the server below. Print 'Server is running.'

app.listen(3000, () => {
  console.log("Server is running.");
});

// Task 8 (CONTINUED IN collectionRoutes.js)
