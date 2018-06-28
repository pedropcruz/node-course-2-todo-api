const mongoose = require('mongoose');

const User = mongoose.model('User',{
	email: {
		required: true,
		trim: true,
		type: String,
		minlength: 1
	}
});

// var user = new User({
// 	email: 'lol@lol.pt'
// });

// user.save().then((doc)=>{
// 	console.log('User saved', doc);
// }, e => {
// 	console.log('Unable to save user', e);
// })

module.exports = {
	User
}