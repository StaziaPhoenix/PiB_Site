var	mongoose	=	require('mongoose');

var sequenceSchema = new mongoose.Schema({
    name: String,
    projects: [{
        order: Number,
        project: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Project',
        },
    },],
});

module.exports = mongoose.model('Sequence', sequenceSchema);