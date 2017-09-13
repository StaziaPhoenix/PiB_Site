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

/* SHOW */
router.get('/:id', function(req, res) {
	res.send('This page will show details for a specific project');
});



module.exports = router;