'use strict';

var express = require('express');

var router = express.Router();

//CRUD operations****************

router.get("/drawings", function(req, res) { //To get all drawings
	Drawing.find({}, function(err, drawings) {
		if(err) {
			return res.status(500).json({message: err.message});
		}
		res.json({drawings: drawings});
	});
});

router.get("/drawings/:id", function(req, res) { //To get a single specific drawing.
	var id = req.params.id;
	Drawing.find({_id: id}, function(err, drawing) {
		if(err) {
			return res.status(500).json({message: err.message});
		}
		res.json({drawing: drawing});
	});
});

router.post("/drawings", function(req, res) {
	var drawing = req.body;
	Drawing.create(drawing, function(err, drawing) {
		if(err) {
			return res.status(500).json({message: err.message});
		}
	});
	res.json({'drawing': drawing, 'message': 'Drawing created'});
});

router.put("/drawings/:id", function(req, res) {
	var id = req.params.id;
	var drawing = req.body;
	if(drawing && drawing._id !== id) {
		return res.status(500).json({err: "ID does not match."});
	}
	Drawing.findByIdAndUpdate(id, drawing, {new: true}, function(err, drawing) {
		if(err) {
			return res.status(500).json({message: err.message});
		}
	});
	res.json({'drawing': drawing, 'message': 'Drawing updated'});
});

router.delete('/drawings/:id', function (req, res) {
    var id = req.params.id; // This maps to the :id in the url
    Drawing.findByIdAndRemove(id, function (err, result) {
        if (err) {
            res.status(500).json({ message: err.message });
        } else {
            res.json({ message: 'Deleted Todo' });
        }
    });
});

//******************CRUD operations.

module.exports = router;