var express		= require('express'),
	router		= express.Router(),
	Project		= require('../models/project'),
	Tag			= require('../models/tag'),
	Sequence	= require('../models/sequence');

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
	Sequence.find({}, function(err, sequences) {
		if (err) {
			console.log(err);
			redirect('back');
		} else {
			res.render('projects/new', {sequences: sequences});
		}
	});
});

/* CREATE */
router.post('/', function(req, res) {
	console.log(req.body);

	/* Add new tag to tag collection, if newTags is not empty */
	var newTags = req.body.newTags.split('|');
	console.log(newTags);
	if (newTags.length > 1 || (newTags.length === 1 && newTags[0] != '')) { // check for empty
		newTags.forEach(function(tag) {
			Tag.create({value: tag}, function (err, createdTag) {
				if (err) {
					// TODO Error handling o.o
					console.log(err);
				} else {
					console.log('I made a new tag called ' + createdTag.value);
				}
			});
		});
	} else {
		console.log('skipping new tags');
	}

	/* Prep new project */
	var newProject = {
		name: req.body.project.name,
		creators: req.body.project.creators,
		mainImage: req.body.project.mainImage,
		hook: req.body.project.hook,
		description: req.body.project.description,
		skillsLearned: req.body.skillsLearned.split('|'),
		tags: req.body.tags.split('|'),
		division: req.body.project.division
	};

	console.log(newProject);

	// Bind the project to a sequence
		// search for the sequence name - if found, bind, if not, create and bind
	Sequence.findOne({name: req.body.project.sequence}, function (err, found) {
		if (err) {
			console.log(err);
			req.flash('error', 'There was an error with your sequence...');
			res.redirect('back');
		} else if (!found) { // CREATE NEW SEQUENCE, THEN ADD PROJECT TO IT
			Sequence.create({name: req.body.project.sequence}, function(err, sequence) {
				if (err) {
					console.log(err);
					req.flash('error', 'There was an error creating your sequence...');
					res.redirect('back');
				} else {
					newProject.sequence = sequence;
					Project.create(newProject, function (err, project) {
						if (err) {
							console.log(err);
							req.flash('error', 'There was an error adding your project...');
							res.redirect('back');
						} else {
							res.redirect('/projects/' + project._id);
						}
					});
				}
			});
		} else { // add project to found
			newProject.sequence = found;
			Project.create(newProject, function (err, project) {
				if (err) {
					console.log(err);
					req.flash('error', 'There was an error adding your project...');
					res.redirect('back');
				} else {
					res.redirect('/projects/' + project._id);
				}
			});
		}
	});
});

/* SHOW */
router.get('/:id', function(req, res) {
	Project.findById(req.params.id, function(err, project) {
		if (err) {
			console.log(err);
			req.flash('error', 'Project not found');
			res.redirect('back');
		} else {
			Project.find({sequence: project.sequence}, function (err, relatedProjects) {
				if (err) {
					console.log(err);
					req.flash('error', 'Project not found');
					res.redirect('back');
				} else {
					res.render('projects/show', {project: project, relatedProjects: relatedProjects});
				}
			});
		}
	});
});

module.exports = router;