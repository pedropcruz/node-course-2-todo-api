//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server')
	}
	console.log('Connected to MongoDB server');
	const db = client.db('TodoApp');

	//deleteMany
	// db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result)=>{
	// 	console.log(result);
	// });

	//deleteOne
	//db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result)=>{
	//console.log(result);
	//});

	//findOneAndDelete
	// db.collection('Todos').findOneAndDelete({completed: false}).then((result)=>{
	// 	console.log(result);
	// });

	// EXERCISE //
	// db.collection('Users')
	// 	.findOneAndDelete({ "_id": new ObjectID("5b299d9a5f2d2ec293d32689") })
	// 	.then((result) => {
	// 		console.log(result);
	// 	});

	// db.collection('Users').deleteMany({name: 'Pedro'}).then( result => {
	// 	console.log(result);
	// });

	//client.close();
});

