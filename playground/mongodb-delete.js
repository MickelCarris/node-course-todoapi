const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // deleteMany
  // db.collection('Todos')
  //   .deleteMany({ text: 'Eat  Lunch' })
  //   .then(result => {
  //     console.log(result);
  //   });

  // // deleteOne
  // db.collection('Todos')
  //   .deleteOne({ text: 'Eat Lunch' })
  //   .then(result => console.log(result));

  // findOneAndDelete
  // db.collection('Todos')
  //   .findOneAndDelete({ completed: false })
  //   .then(result => console.log(result));

  // Users
  // db.collection('Users')
  //   .deleteMany({ name: 'John' })

  db.collection('Users')
    .findOneAndDelete({ _id: new ObjectID('5d6fb2b77719602cc00d5eea') })
    .then(res => console.log(res));

  // db.close();
});
