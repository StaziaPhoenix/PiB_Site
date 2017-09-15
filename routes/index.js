var express = require('express'),
	router = express.Router();

/* ROOT */
router.get('/', function(req, res) {
	res.render('landing');
});

/* REGISTER */


/* LOGIN */


/* LOGOUT */


/* GET INVOLVED 					  */
/* Visitors use this page to join PiB */
router.get('/getinvolved', function(req, res) {
	res.render('getinvolved');
});

/* R&D Main Page */
router.get('/rnd', function(req, res) {
	res.render('404');
})

/* INSPIRE Main Page */
router.get('/inspire', function(req, res) {
	res.render('404');
})

/* LAUNCH Main Page */
router.get('/launch', function(req, res) {
	res.render('404');
})

/* PARTNERSHIP Main Page */
router.get('/partnership', function(req, res) {
	res.render('404');
})


module.exports = router;