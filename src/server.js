'use strict';

//Port number and ip address.
var port = process.env.PORT || 3000;

//Create the server instance and the router.
var express = require("express"),
    app = express(),
    parser = require("body-parser"),
    router = require("./api");

//Middleware for static files.
app.use("/", express.static("public"));
app.use(parser.json());

//Create the route for the API.
app.use("/api", router);

//Start the server.
app.listen(port, function() {
    console.log("Server running at http://localhost:" + port);
});