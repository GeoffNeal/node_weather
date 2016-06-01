'use strict';

var port = 3000,
    address = "http://127.0.0.1";

var express = require("express"),
	app = express(),
    parser = require("body-parser"),
    router = require("./api");

app.use("/", express.static("public"));
app.use(parser.json());

app.use("/api", router);

http.listen(port, function() {
	console.log("Server running at " + address + ":" + port);
});