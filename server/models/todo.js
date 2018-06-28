const mongoose = require('mongoose');

const Todo = mongoose.model('Todo', {
	text: {
		type: String,
		required: true,
		minlength: 1,
		trim: true
	},
	completed: {
		type: Boolean,
		default: false
	},
	completedAt: {
		type: Number,
		default: null
	}
});

// const otherTodo = new Todo({
// 	text: 'Something to do'
// });

// otherTodo.save().then(result => {
// 	console.log('Saved todo', result);
// }, e => {
// 	console.log('Unable to save todo', e);
// });

module.exports = {
	Todo
}