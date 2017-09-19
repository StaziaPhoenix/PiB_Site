var express		= require('express'),
	router		= express.Router(),
	fs			= require('fs'),
	exec		= require('child_process').exec,
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

	/* Add new tag to tag collection, if newTags is not empty */
	var newTags = req.body.newTags.split('|');
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
		hook: req.body.project.hook,
		description: req.body.project.description,
		skillsLearned: req.body.skillsLearned.split('|'),
		tags: req.body.tags.split('|'),
		division: req.body.project.division,
		downloadCount: 0
	};

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
					Project.create(newProject, function(err, project) {
						createProject(err, project, req.files);
						res.redirect('/projects/' + project._id);
					});
				}
			});
		} else { // add project to found
			newProject.sequence = found;
			Project.create(newProject, function(err, project) {
				createProject(err, project, req.files);
				res.redirect('/projects/' + project._id);
			});
		}
	});
});

/* DOWNLOAD DOCUMENTATION */
router.get('/download/:id/:documentation', function(req, res) {
	var path = __dirname + '/../assets/project-files/' + req.params.id + '/' + req.params.documentation;
	res.download(path);

	Project.findById(req.params.id, function(err, project) {
		if (err) {
			console.log(err);
		} else {
			project.downloadCount++;
			project.save();
		}
	})
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


/******** HELPERS ********/

function createProject(err, project, files) {
	if (err) {
		console.log(err);
		req.flash('error', 'There was an error adding your project...');
		return;
	}
	/* Put away media and documentation files */
	var dirname = __dirname + '/../assets/project-files/' + project._id;
	var mkdir = 'mkdir -p ' + dirname;
	exec(mkdir, function (err, stdout, stderr) {
		if (err) {
			console.log("ERROR WITH EXEC");
			return;
		}

		/* WRITE THE FILES INTO THEIR FOLDER */
		files.forEach(function(file) {
			fs.readFile(file.path, function(err, data) {
				if (err) {
					console.log("PROBLEM READING FILE");
				} else {
					var destination = dirname + '/' + file.originalname;
					fs.writeFile(destination, data, function(err) {
						if (err) {
							console.log("COULDN'T WRITE THE FILE");
						}
					});
				}
			});
		});

		/* UPDATE PROJECT OBJECT WITH THE PATHS */
		// mainImage is the first file
		project.mainImage = files[0].originalname;

		// everything in between is other media
		for (var i = 1; i < files.length - 1; i++) {
			project.media.push(files[i].originalname);
		}

		// documentation is the last file
		project.documentation = files[files.length-1].originalname;

		Project.findByIdAndUpdate(project._id, project, function(err, project) {
			if (err) {
				console.log("ERROR WRITING FILE PATHS TO PROJECT");
				console.log(err);
			}
		});
	});
}

module.exports = router;