var	express			=	require('express'),
	app				=	express(),
	// bodyParser		=	require('body-parser'),
	passport		=	require('passport'),
	LocalStrategy	=	require('passport-local'),
	methodOverride	=	require('method-override'),
	mongoose		=	require('mongoose'),
	flash			=	require('connect-flash'),
	helmet			=	require('helmet'),
	// busboy			=	require('express-busboy'),
	multer			=	require('multer'),
	dotenv			=	require('dotenv');

var	User			=	require('./models/user');

var	projectRoutes	=	require('./routes/projects'),
	indexRoutes		=	require('./routes/index');


/******** THINGS TO USE ********/
app.set('port', (process.env.PORT || 3000));
// app.use(bodyParser.urlencoded({extended: true}));
app.use(multer({ dest: __dirname + '/uploads/'}).any());

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/assets'));
app.use(methodOverride('_method'));

app.use(require("express-session")({
	secret: "I love my Iubi AND my kittens.",
	resave: false,
	saveUninitialized: false
}));

app.use(flash());
app.use(helmet());
dotenv.load();


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
    console.log('Pibsite running on ', app.get('port'));
});
