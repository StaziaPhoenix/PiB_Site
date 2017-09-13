var express		= require('express'),
	router		= express.Router(),
	Project		= require('../models/project');

/* INDEX */
router.get('/', function(req, res) {
	Project.find({}, function(err, projects) {
		if (err) {
			console.log(err);
			return res.redirect('/problem');
		}

		res.render('projects/index', {projects: projects});
	});
});

/* NEW */
router.get('/new', function(req, res) {
	res.render('projects/new');
});

/* CREATE */
router.post('/', function(req, res) {
	console.log(req);
	res.send('you posted');
});

/* SHOW */
router.get('/:id', function(req, res) {
	res.send('This page will show details for a specific project');
});

module.exports = router;