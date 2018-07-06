const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// Todo.remove({}).then((result) => {
// 	console.log(result);
// });

// Todo.findOneAndRemove({})
// Todo.findByIdAndRemove({})

Todo.findOneAndRemove({_id: '5b3eba6c097452c0a44b1376'}).then((todo) => {
	console.log(todo);
})

Todo.findByIdAndRemove('5b3eba6c097452c0a44b1376').then((todo) => {
	 console.log(todo);
})