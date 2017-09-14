var	mongoose	=	require('mongoose');

var sequenceSchema = new mongoose.Schema({
    name: String
});

module.exports = mongoose.model('Sequence', sequenceSchema);