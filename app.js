var	express			=	require('express'),
	app				=	express(),
	bodyParser		=	require('body-parser'),
	passport		=	require('passport'),
	LocalStrategy	=	require('passport-local'),
	methodOverride	=	require('method-override'),
	mongoose		=	require('mongoose'),
	flash			=	require('connect-flash'),
	formidable		=	require('express-formidable');

var	User			=	require('./models/user');

var	projectRoutes	=	require('./routes/projects'),
	indexRoutes		=	require('./routes/index');


/******** THINGS TO USE ********/
app.set('port', (process.env.PORT || 3000));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/assets'));
app.use(methodOverride('_method'));
app.use(flash());
app.use(formidable());


/******** DATABASE ********/
console.log(process.env.DATABASE);
mongoose.connect(process.env.DATABASE, {useMongoClient: true});
mongoose.Promise = global.Promise;


/******** ROUTES ********/
app.use('/', indexRoutes);
app.use('/projects', projectRoutes);


/******** PASSPORT ********/


/******** SEED DATABASE DURING DEVELOPMENT ********/
// var seedDB = require('./seed');
// seedDB();


app.listen(app.get('port'), function() {
    console.log('PiB Site running on ', app.get('port'));
});
