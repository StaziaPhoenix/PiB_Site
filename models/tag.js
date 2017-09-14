var mongoose    =   require('mongoose');

var tagSchema = new mongoose.Schema({
    value: String
});

module.exports = mongoose.model('Tag', tagSchema);