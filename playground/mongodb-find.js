const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB Server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos')
  //   .find({ _id: new ObjectID('5d6fb4ddc62a2831d48c6677') })
  //   .toArray()
  //   .then(docs => {
  //     console.log('Todos');
  //     console.log(JSON.stringify(docs, undefined, 2));
  //   })
  //   .catch(err => console.log('Unable to fetch todos',err));

  // db.collection('Todos')
  //   .find()
  //   .count()
  //   .then(
  //     count => {
  //       console.log(`Todos Count: ${count}`);
  //     },
  //     err => {
  //       console.log('Unable to fetch todos', err);
  //     }
  //   );

  db.collection('Users')
    .find({ location: 'Los Angeles, USA', age: 34 })
    .toArray()
    .then(
      docs => {
        console.log(JSON.stringify(docs, undefined, 2));
      },
      err => console.log(err)
    );

  // db.close();
});
