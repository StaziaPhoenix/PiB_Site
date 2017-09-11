var express = require('express'),
	router = express.Router();

/* INDEX */
router.get('/projects', function(req, res) {
	res.send('This page will display all projects');
});

/* SHOW */
router.get('/:id', function(req, res) {
	res.send('This page will show details for a specific project');
});



module.exports = router;