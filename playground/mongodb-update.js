//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server')
	}
	console.log('Connected to MongoDB server');
	const db = client.db('TodoApp');

	//findOneAndUpdate
	// db.collection('Todos').findOneAndUpdate({
	// 	_id: new ObjectID("5b3185fa373b42c2c59efb1e")
	// }, {
	// 		$set: {
	// 			completed: true
	// 		}
	// 	}, {
	// 		returnOriginal: false
	// 	}).then((result) => {
	// 		console.log(result);
	// 	});

	//Challenge

	// db.collection('Users').findOneAndUpdate({
	// 	name: 'Pedro'
	// }, {
	// 		$inc: {
	// 			age: -2
	// 		}
	// 	}, {
	// 		returnOriginal: false
	// 	}).then(result => {
	// 		console.log(result);
	// 	});

	//client.close();
});

