const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// const id = '5b357ebfc5e748a74ab5485b11';

// if(!ObjectID.isValid(id)){
// 	return console.log('ID is not valid');
// }

// Todo.find({
// 	_id: id
// }).then((todos)=>{
// 	console.log('TODOS: ', todos);
// });

// Todo.findOne({
// 	_id: id
// }).then((todo) => {
// 	console.log('TODO: ', todo);
// });

// Todo.findById(id).then((todo) => {
// 	if(!todo){
// 		return console.log('ID not found');
// 	}
// 	console.log('TODO FINDED BY ID: ', todo);
// }).catch((e)=>{
// 	console.log(e);
// });

const id = '5b3192a03edfe5aa6bb154f9';

if(!ObjectID.isValid(id)){
	return console.log('ID is not valid');
}

User.find({
	_id: id
}).then((users) => {
	console.log('FOUND USERS: ', users);
}).catch((e)=>{
	console.log('ID not found', e);
});

User.findOne({
	_id: id
}).then((user)=>{
	console.log('FOUND USER: ', user);
}).catch((e) => {
	console.log('ID not found', e);
});

User.findById(id).then((user)=>{
	if(!user){
		return console.log('USER NOT FOUND!');
	}
	console.log('USER:', user);
})

