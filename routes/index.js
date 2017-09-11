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

module.exports = router;