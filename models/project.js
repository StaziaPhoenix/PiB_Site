var mongoose    =   require('mongoose');

var projectSchema = new mongoose.Schema({
    name: String,
    creators: [String],
    mainImage: String,
    media: [String],
    hook: String,
    description: String,
    skillsLearned: [String],
    tags: [String],
    division: String,
    sequence: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Sequence',
	},
	addedBy: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
	},
});

module.exports = mongoose.model('Project', projectSchema);